/*
################################################################################
#                                                                              #
# db    db  .8888.  dP     888888b 8888ba   .8888.     d8b   db 888888b d8888P #
# 88    88 d8'  `8b 88     88      88  `8b d8'  `8b    88V8  88 88        88   #
# Y8    8P 88    88 88    a88aaa   88aa8P' 88    88    88 V8 88 88aaa     88   #
# `8b  d8' 88    88 88     88      88  `8b 88    88    88  V888 88        88   #
#  `8bd8'  Y8.  .8P 88     88      88  .88 Y8.  .8P dP 88   V88 88        88   #
#    YP     `888P'  88888P 888888P 888888'  `888P'  88 VP    8P 888888P   dP   #
#                                                                              #
################################################################################
#
# Copyright (C) 2016-2024 Volebo <dev@volebo.net>
# Copyright (C) 2016-2024 Maksim Koryukov <maxkoryukov@volebo.net>
#
# This program is free software: you can redistribute it and/or modify
# it under the terms of the MIT License, attached to this software package.
#
# This program is distributed in the hope that it will be useful,
# but WITHOUT ANY WARRANTY; without even the implied warranty of
# MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.
#
# You should have received a copy of the MIT License along with this
# program. If not, see <https://opensource.org/licenses/MIT>.
#
################################################################################
*/


import fs           from 'node:fs'
import path         from 'node:path'
import { ESLint }   from 'eslint'


const SAMPLES_BASE_PATH = './tests/samples/'


function _listTestFilesSync (testDir) {
	const _dpath = path.join(SAMPLES_BASE_PATH, testDir)
	return fs.readdirSync(_dpath, { withFileTypes: true })
		.filter(dirent => !dirent.isDirectory())
		.map(fileInfo => path.join(testDir, fileInfo.name))
}


// takes eslint output and generates a string to annotate failing tests
function lintResToString(oneEslintRes) {
	const msgs = oneEslintRes
		?.messages
		?.map(m => {
			return `${m.line}: ${m.message}`
		})
		.join('; ')
	return msgs
}


const eslint = new ESLint({ 'ignore': false })


// mostly taken from ESLint examples:
function lintAsync (filePattern) {

	// 2. Lint files.
	// const results = await eslint.lintFiles(filePattern)
	const results = eslint.lintFiles(filePattern)

	// 3. Format the results.
	// const formatter = await eslint.loadFormatter("stylish")
	// const resultText = formatter.format(results)

	// 4. Output it.
	// console.log(resultText)

	return results
}


describe('eslint-config-volebo', function () {


	describe('linting GOOD files', function () {

		const testCases = _listTestFilesSync('oks')

		for (const name of testCases) {

			it(`should pass [${name}]`, function () {

				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {
						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = lintResToString(res[0])
						const res0 = res[0]

						expect(res0).has.property('messages').eql([], msgs)
						expect(res0).has.property('errorCount', 0, msgs)
						expect(res0).has.property('warningCount', 0, msgs)
					})
			})
		}
	})


	describe('linting WARN files', function () {

		const testCases = _listTestFilesSync('warns')

		for (const name of testCases) {

			it(`should warn [${name}]`, function () {

				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {

						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = lintResToString(res[0])
						const res0 = res[0]

						expect(res0).has.property('errorCount', 0, msgs)
						expect(res0).has.property('warningCount').greaterThan(0, msgs)
					})
			})
		}
	})


	describe('linting ERROR files', function () {

		const testCases = _listTestFilesSync('errors')

		for (const name of testCases) {

			it(`should error [${name}]`, function () {

				const _m = name.match(/([-\w\d]+)\.(\d+)/i)

				const ruleName = _m?.[1]
				const errCount = Number(_m?.[2])
				expect(errCount)
					.is.a('number')
					.greaterThan(0, 'file name has wrong format')

				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {

						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = lintResToString(res[0])
						const res0 = res[0]

						const unicornAbbrevs = res[0].messages?.filter(m => 'unicorn/prevent-abbreviations' === m.ruleId).length

						// expect(res0).has.property('errorCount').greaterThan(0, msgs)
						expect(res0).has.property('errorCount',   errCount,       msgs)
						expect(res0).has.property('warningCount', unicornAbbrevs, msgs)

						for (const msg of res0?.messages) {
							if ('unicorn/prevent-abbreviations' === msg.ruleId) {
								continue
							}
							expect(msg.ruleId).matches(new RegExp('(^|/)' + ruleName + '$'))
						}
					})
			})
		}
	})

})
