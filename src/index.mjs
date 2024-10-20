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

import neostandard         from 'neostandard'
import mochaPlugin         from 'eslint-plugin-mocha'
import eslintPluginUnicorn from 'eslint-plugin-unicorn'
import globals             from 'globals'
// import jsdoc from 'eslint-plugin-jsdoc'
//                    eslint-plugin-import


// FIXME: HACK unless i upgrade locally to node>17  https://stackoverflow.com/a/73695667/1115187
if (!globalThis.structuredClone) {
	// eslint-disable-next-line unicorn/prefer-structured-clone
	globalThis.structuredClone = (value) => JSON.parse(JSON.stringify(value))
}


export default [
	...neostandard(),
	// jsdoc.configs['flat/recommended-typescript-flavor'],

	// mochaPlugin.configs.flat.all,   //  to enable all
	mochaPlugin.configs.flat.recommended,

	eslintPluginUnicorn.configs['flat/recommended'],

	// =========================================================================
	// volebo config:
	// =========================================================================
	{
		name: 'volebo',
		ignores: [
			'/node_modules/*',
			'/bower_components/*',
			'/coverage/',
			'/tmp/',
			'/log/',
			'/docker/',
		],

		languageOptions: {
			parserOptions: {
				ecmaVersion: 14, // 2023,
				sourceType: 'module',
			},

			globals: {
				// 'BigInt': 'readonly',
			},
		},

		rules: {
			'object-shorthand': ['error', 'consistent'],
			'no-process-exit': ['error'],
			'no-var': ['error'],
			'no-warning-comments': ['warn', { 'terms': ['todo', 'fixme', 'xxx', 'bug'], 'location': 'start' }],
			// 'no-unused-vars': ['warn'],
			'yoda': ['warn', 'always'],

			'@stylistic/comma-dangle': ['error', 'always-multiline'],
			'@stylistic/comma-style': ['warn', 'last'],
			'@stylistic/indent': [
				'error',
				'tab',
				{
					'SwitchCase': 1,
				},
			],

			'@stylistic/padded-blocks': 'off',
			'@stylistic/no-multiple-empty-lines': ['error', { max: 2, maxBOF: 1, maxEOF: 1 }],
			'@stylistic/no-multi-spaces': ['warn', {
				ignoreEOLComments: true,
				exceptions: {
					// I like to align "import" declarations
					'ImportDeclaration': true,
					'ExportAllDeclaration': true,
					'ExportNamedDeclaration': true,
				},
			}],
			'@stylistic/no-tabs': ['off', { allowIndentationTabs: true }],
			'@stylistic/no-trailing-spaces': ['error'],
			'@stylistic/quote-props': ['error', 'consistent', { 'keywords': true }],
			'@stylistic/semi': ['error', 'never'],

			// unicorn

			'unicorn/prevent-abbreviations': ['warn'],
			'unicorn/no-null': ['off'],

			// mocha

			'mocha/no-mocha-arrows': ['warn'],
		},
	},

	{
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

				'filename2suitename': true,
				'filename2suitenameEsm': true,
				'tags': true,
			},
		},

		rules: {
			// there is a problem with this rule: we generate the "top level"
			// test name (in `describe`) using filename. I _could_ consider
			// breaking the top level decribe call into two lines:
			// - get name
			// - call describe
			// but ATM it is easier for me to disable this rule completely
			'mocha/no-setup-in-describe': ['off'],
		},
	},

	// !!! THIS PROJECT !!!
	{

		ignores: [
			// =========================================
			// project-related ignores
			// =========================================

			'/docker/*',
		],
	},
]
