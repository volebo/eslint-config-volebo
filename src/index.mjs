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
# Copyright (C) 2016 Volebo <dev@volebo.net>
# Copyright (C) 2016 Maksim Koryukov <maxkoryukov@volebo.net>
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

import {
	default as neostandard,
	plugins,
}                          from 'neostandard'

import globals             from 'globals'

import pluginMocha         from 'eslint-plugin-mocha'
import pluginUnicorn       from 'eslint-plugin-unicorn'
import pluginChaiFriendly  from 'eslint-plugin-chai-friendly'

// import jsdoc from 'eslint-plugin-jsdoc'
//                    eslint-plugin-import


const vlbPlugins = {
	...plugins,

	get unicorn () {
		return pluginUnicorn
	},
}


export { vlbPlugins as plugins }

export { resolveIgnoresFromGitignore } from 'neostandard'

// // FIXME: HACK unless i upgrade locally to node>17  https://stackoverflow.com/a/73695667/1115187
// if (!globalThis.structuredClone) {
// 	// eslint-disable-next-line unicorn/prefer-structured-clone
// 	globalThis.structuredClone = (value) => JSON.parse(JSON.stringify(value))
// }


export function eslintVoleboConfig (options) {

	// `false` when you have `prettier`
	const withStyleRules = options?.withStyleRules ?? true

	return [
		...neostandard({
			// env: ['browser'],
			// globals: { ...globalInProject },
			// ignores: [
			// ...require('neostandard').resolveIgnoresFromGitignore(),
			// ],
			noJsx: true,
			noStyle: !withStyleRules,
			semi: false,     // no semicolons
		}),

		// // TODO: let's do in in v5 or later
		// // #fixNEverywhere
		// plugins.n.configs['flat/recommended'],

		// jsdoc.configs['flat/recommended-typescript-flavor'],

		pluginUnicorn.configs['flat/recommended'],

		// =========================================================================
		// volebo config:
		// =========================================================================
		{
			name: 'volebo/default',

			languageOptions: {
				ecmaVersion: 14, // 2023,
				sourceType: 'module',
			},

			rules: {

				// -----------------------------------------------------------------
				// complexity and line numbers:
				// -----------------------------------------------------------------
				'max-params':           ['warn', { 'max': 4 }],
				'complexity':           ['warn', { 'max': 20 }],
				'max-depth':            ['warn', { 'max': 5 }],
				'max-nested-callbacks': ['warn', { 'max': 3 }],
				'max-len':              ['warn', {
					code:                    120,
					tabWidth:                2,
					// comments:              enforces a maximum line length for comments; defaults to value of code
					// ignorePattern:         ignores lines matching a regular expression; can only match a single line and need to be double escaped when written in YAML or JSON
					ignoreComments:           true, // true ignores all trailing comments and comments on their own line
					// ignoreTrailingComments:   true, // true ignores only trailing comments
					ignoreUrls:               true, // true ignores lines that contain a URL
					ignoreStrings:            true, // true ignores lines that contain a double-quoted or single-quoted string
					ignoreTemplateLiterals:   true, // true ignores lines that contain a template literal
					ignoreRegExpLiterals:     true, // true ignores lines that contain a RegExp literal
				}],
				// 'max-lines': ['warn', { 'max': 300 }],
				// 'max-lines-per-function': ['warn', { 'max': 300 }],
				// 'max-statements': ['warn', { 'max': 300 }],

				// -----------------------------------------------------------------

				'object-shorthand': ['error', 'consistent'],
				'no-extra-semi': ['error'],

				// because we can rely on unicorn/no-process-exit (TESTED)
				'no-process-exit': ['off'],

				// CODE STYLE: neostandard:  deactivated – _clashes_ with the
				// `noPropertyAccessFromIndexSignature` check in TypeScript
				'dot-notation': ['off'],
				'curly': ['error'],

				// sometimes a lonely `return` improve readability by explicitly
				// indicating the end of function
				'no-useless-return': ['off'],

				'no-irregular-whitespace': ['error', { 'skipComments': true }],

				'no-eq-null':    ['error'],
				'eqeqeq':        ['error'], // 'smart'

				'no-loop-func':  ['error'],
				'require-yield': ['error'],

				'no-empty': ['error', {
					allowEmptyCatch: false,
				}],
				'no-empty-function': ['error'],

				'no-unused-vars': ['error', {
					args: 'all',
					argsIgnorePattern: '^__',
					caughtErrors: 'none',
					ignoreRestSiblings: true,
					vars: 'all',
				}],

				'no-var': ['error'],
				'no-warning-comments': ['warn', {
					terms: [
						'todo',
						'fixme',
						'fixme',
						'xxx',
						'bug',
					],
					location: 'start',
				}],
				'yoda': ['warn', 'always'],

				// -----------------------------------------------------------------
				// CODE SMELL
				// -----------------------------------------------------------------
				'no-global-assign': ['error'],
				'no-extend-native': ['error'],

				'no-bitwise':    ['error'],
				'guard-for-in':  ['error'],
				'no-console':    ['error'],  // use `debug` or other packages, or add explicit "eslint-ignore" for lines with console.xxx
				// TODO: move 'no-alert' to the "browser.mjs"
				'no-alert':      ['error'],

				'no-plusplus':   ['error', {
					allowForLoopAfterthoughts: true,
				}],
				'no-param-reassign': ['error', {
					props: false,
				}],


				// -----------------------------------------------------------------
				// @stylistic
				// -----------------------------------------------------------------

				'@stylistic/no-extra-parens': ['warn', 'all', { 'nestedBinaryExpressions': false }],
				'@stylistic/comma-dangle': ['error', 'always-multiline'],
				'@stylistic/comma-style': ['warn', 'last'],
				'@stylistic/indent': [
					'error',
					'tab',
					{
						SwitchCase: 1,
					},
				],

				'@stylistic/padded-blocks': ['off'],
				'@stylistic/key-spacing': ['error', {
					beforeColon: false,
					afterColon: true,
					mode: 'minimum',

					// mk @ 2024-10-20: it doesn't allow to write "objects" without aligning (and I do it a lot)
					// align: {beforeColon: false, afterColon: true, mode: 'minimum', on: 'value', },
				}],
				'@stylistic/no-multi-spaces': ['warn', {
					ignoreEOLComments: true,
					exceptions: {
						// I like to align "import" declarations
						ImportDeclaration: true,
						ExportAllDeclaration: true,
						ExportNamedDeclaration: true,
					},
				}],
				'@stylistic/no-multiple-empty-lines': ['error', {
					max: 2,
					maxBOF: 1,
					maxEOF: 1,
				}],
				'@stylistic/no-trailing-spaces': ['error'],

				'@stylistic/no-tabs': ['off', { allowIndentationTabs: true }],
				'@stylistic/quote-props': ['error', 'consistent', { 'keywords': true }],
				'@stylistic/semi': ['error', 'never'],

				// -----------------------------------------------------------------
				// UNICORN
				// -----------------------------------------------------------------

				// there is no problem with top-level Promise-chainj
				'unicorn/prefer-top-level-await': ['off'],

				// it is annoying that `jsonAsStr` is not a good name
				// for a local variable
				'unicorn/prevent-abbreviations': ['off'], // ['warn', {
				// 	allowList: {
				// 		'arg': true,
				// 		'arr': true,
				// 		'err': true,
				// 		'msg': true,
				// 		'obj': true,
				// 		'param': true,
				// 		'req': true,
				// 		'res': true,
				// 		'str': true,
				// 		'val': true,
				// 		'x': true,
				// 		'y': true,
				// 	},
				// }],

				// what? wait, we like to use null
				// we use DB, and sometimes we need to erase the content of a field
				// without `null` - it is just weird
				'unicorn/no-null': ['off'],

				// because of https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1193
				// I'm going to disable these three rules, since they make
				// the "not bad"-code look like there is a critical error
				'unicorn/no-array-for-each': ['warn'],
				'unicorn/no-array-callback-reference': ['off'],
				'unicorn/no-array-method-this-argument': ['off'],
				'unicorn/no-array-reduce': ['off'],
				// ^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^^

				// because it complains about `try{} catch (err) {}`
				'unicorn/catch-error-name': ['off'],

				// because I used to invert conditions to move a shorter block up
				'unicorn/no-negated-condition': ['off'],

				// it doesn't make a lot of sense:
				// `substring` is just as legal as slice
				'unicorn/prefer-string-slice': ['off'],

				// eslint's defaut "no-lonely-if" is more than enough and this rule
				'unicorn/no-lonely-if': ['off'],

				// -----------------------------------------------------------------
				// TODO: MAYBE THESE TOO:
				// -----------------------------------------------------------------
				// '@stylistic/operator-linebreak': ['off'],
				// '@stylistic/object-property-newline': ['off'],
				// '@stylistic/multiline-ternary': ['off'],
			},

			ignores: [
				'bower_components/*',
				'coverage/',
				'docker/',
				'log/',
				'node_modules/*',
				'tmp/',
			],
		},

		{
			name: 'volebo/default/cjs',
			files: [
				'**/*.cjs',
			],
			languageOptions: {
				sourceType: 'commonjs',
			},
			rules: {
				'strict':        ['error', 'global'],

				// because these files are not modules EXPLICITLY (.cjs)
				'unicorn/prefer-module': ['off'],
			},
		},

		// pluginMocha.configs.flat.all,   //  to enable all
		pluginMocha.configs.flat.recommended,
		{
			name: 'volebo/default/tests',

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
			},
			settings: {
				'mocha/additionalCustomNames': [
					{ name: 'tags', type: 'suite',    interfaces: ['BDD'] },
					{ name: 'tags', type: 'testCase', interfaces: ['TDD'] },
				],
			},
		},
	]
}

const defaultConfig = eslintVoleboConfig()
export default defaultConfig
