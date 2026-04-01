/*
########################################################################
#                                                                      #
# db   db  .888.  dP    88888b 888ba   .888.     d8b  db 88888b d8888P #
# 88   88 d8' `8b 88    88     88 `8b d8' `8b    88V8 88 88       88   #
# Y8   8P 88   88 88    88aa   88a8P' 88   88    88 VL88 88aa     88   #
# `8b d8' 88   88 88    88     88 `8b 88   88    88  V88 88       88   #
#  `8V8'  Y8. .8P 88    88     88 .88 Y8. .8P dP 88  `88 88       88   #
#   `Y'    `88P'  8888P 88888P 88888'  `88P'  88 VP   8P 88888P   dP   #
#                                                                      #
########################################################################
#
# Copyright (C) 2016-2026 Volebo <dev@volebo.net>
# Copyright (C) 2016-2026 Maksim Koryukov <maxkoryukov@volebo.net>
#
# This program is free software: you can redistribute it
# and/or modify it under the terms of the MIT License, attached
# to this software package.
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
########################################################################
*/

import pluginMocha         from 'eslint-plugin-mocha'
import globals             from 'globals'
import pluginChaiFriendly  from 'eslint-plugin-chai-friendly'


export const plugins = {
	mocha: pluginMocha,
}

export const config = [
	// pluginMocha.configs.flat.all,   //  to enable all
	pluginMocha.configs.recommended,
	{
		name: 'volebo/mocha',

		files: [
			'**/*.test.js',
			'**/*.test.mjs',
			'**/*.test.cjs',
			'**/*.spec.js',
			'**/*.spec.cjs',
			'**/*.spec.mjs',
		],

		languageOptions: {
			globals: {
				...globals.mocha,
				...globals.chai,

				'chaiFile': true,
				'filename2suitename': true,
				'filename2suitenameCjs': true,
				'filename2suitenameEsm': true,
				'fn2sn': true,
				'tags': true,
			},
		},

		plugins: {
			'chai-friendly': pluginChaiFriendly,
		},

		rules: {
			// in mocha tests there are a lot of `describe` and `it`
			// so actual tests are on 4th of 5th or 6th level of nested
			// callbacks. Thus: relaxing the rule:
			'max-nested-callbacks': ['warn', { 'max': 8 }],

			// -----------------------------------------------------------------
			// mocha
			// -----------------------------------------------------------------

			'mocha/no-mocha-arrows': ['warn'],

			// there is a problem with this rule: we generate the "top level"
			// test name (in `describe`) using filename. I _could_ consider
			// breaking the top level decribe call into two lines:
			// - get name
			// - call describe
			// but ATM it is easier for me to disable this rule completely
			//
			// another reason: we use dynamically generated tests:
			// https://mochajs.org/#dynamically-generating-tests
			// TODO: consider turning on , or looking for an alternative
			'mocha/no-setup-in-describe': ['off'],

			// chaiJS has expressions like:
			//
			// 		expect(act).is.null
			//
			// but original eslint's 'no-unused-expressions' raise an error.
			// in order to keep the rule working, but with chai-expressions
			// this plugin is added:
			'no-unused-expressions': ['off'],
			'chai-friendly/no-unused-expressions': ['error', {
				allowShortCircuit: true,
				allowTernary: true,
				allowTaggedTemplates: true,
			}],

			// TODO: enable it when mocha-plugin will be able to support construcitons `tags().describe('', fn() { before...`
			// #bugRuleMochaTopLevelHooks GL-17
			'mocha/no-top-level-hooks': ['off'],
		},
		settings: {
			'mocha/additionalCustomNames': [
				{ name: 'tags()', type: 'suite',    interface: 'BDD' },
				{ name: 'tags()', type: 'suite',    interface: 'TDD' },
				{ name: 'tags()', type: 'suite',    interface: 'exports' },

				{ name: 'tags()', type: 'testCase', interface: 'BDD' },
				{ name: 'tags()', type: 'testCase', interface: 'TDD' },
				{ name: 'tags()', type: 'testCase', interface: 'exports' },
			],
		},
	},
]
