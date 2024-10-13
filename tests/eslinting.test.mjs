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
# http://spdx.org/licenses/MIT
#
################################################################################
*/


import fs           from 'node:fs'
import path         from 'node:path'
import { ESLint }   from 'eslint'

// const thisConfig   = require('../index.js')


function _listTestFilesSync(testDir) {
	const _dpath = path.join(SAMPLES_BASE_PATH, testDir)
	return fs.readdirSync(_dpath, { withFileTypes: true })
		.filter(dirent => !dirent.isDirectory())
		.map(fileInfo => path.join(testDir, fileInfo.name))
}

const eslint = new ESLint({'ignore': false})

// mostly taken from ESLint examples:
function lintAsync(filePattern) {

	// 2. Lint files.
	// const results = await eslint.lintFiles(filePattern)
	const results = eslint.lintFiles(filePattern)

	// 3. Format the results.
	//const formatter = await eslint.loadFormatter("stylish")
	//const resultText = formatter.format(results)

	// 4. Output it.
	// console.log(resultText)

	return results
}


const SAMPLES_BASE_PATH = './tests/samples/'


describe('eslint-config-volebo', () => {


	describe('linting GOOD files', () => {

		const testCases = _listTestFilesSync('oks')

		testCases.forEach(name => {

			it(`should pass [${name}]`, () => {

				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {
						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = res[0]?.messages?.map(m => m.message).join(';')
						const res0 = res[0]

						expect(res0).has.property('messages').eql([], msgs)
						expect(res0).has.property('errorCount', 0, msgs)
						expect(res0).has.property('warningCount', 0, msgs)
					})
			})
		})
	})


	describe('linting WARN files', () => {

		const testCases = _listTestFilesSync('warns')

		testCases.forEach(name => {

			it(`should pass [${name}]`, () => {


				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {

						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = res[0]?.messages?.map(m => m.message).join(';')
						const res0 = res[0]

						expect(res0).has.property('errorCount', 0, msgs)
						expect(res0).has.property('warningCount').greaterThan(0, msgs)
					})
			})
		})
	})


	describe('linting ERROR files', () => {

		const testCases = _listTestFilesSync('errors')

		testCases.forEach(name => {

			it(`should pass [${name}]`, () => {

				const _m = name.match(/\d+\-([-\w\d]+)\.(\d+)/i)

				const ruleName = _m?.[1]
				const errCount = Number(_m?.[2])
				expect(errCount)
					.is.a('number')
					.greaterThan(0, 'file name has wrong format')

				return lintAsync(path.join(SAMPLES_BASE_PATH, name))
					.then(res => {

						expect(res).is.an('array').lengthOf(1)

						// join eslint messages for debugging
						const msgs = res[0].messages?.map(m => m.message).join(';')
						const res0 = res[0]

						//expect(res0).has.property('errorCount').greaterThan(0, msgs)
						expect(res0).has.property('errorCount',   errCount, msgs)
						expect(res0).has.property('warningCount', 0,        msgs)

						res0.messages.forEach(msg => {
							expect(msg.ruleId).matches(new RegExp('/' + ruleName + '$'))
						})
					})
			})
		})
	})

})
