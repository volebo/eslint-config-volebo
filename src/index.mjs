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

import neostandard         from 'neostandard'
import pluginUnicorn       from 'eslint-plugin-unicorn'
import pluginBoundaries    from 'eslint-plugin-boundaries'

// hacks and tricks
//   https://github.com/neostandard/neostandard/pull/299
// because @stylistic is outdated in the neostandard...
import pluginStylistic     from '@stylistic/eslint-plugin'

import * as partsMocha     from './parts/mocha.mjs'
import * as partsBrowser   from './parts/browser.mjs'
import * as partsStyle     from './parts/ns-style.mjs'
import * as partsMdrnz     from './parts/ns-modernization.mjs'


// import jsdoc from 'eslint-plugin-jsdoc'
//                    eslint-plugin-import


const vlbPlugins = {
	...neostandard.plugins,

	get unicorn () {
		return pluginUnicorn
	},

	get boundaries () {
		return pluginBoundaries
	},

	get mocha () {
		return partsMocha.plugins.mocha
	},

	get stylistic () {
		return pluginStylistic
	},
}

export { vlbPlugins as plugins }

export { resolveIgnoresFromGitignore } from 'neostandard'

export function eslintConfigVolebo (options) {

	// do not use neostandard's style from the package, and
	// use the locally copied version of their rules (ns-styles.mjs)
	const noNeostandardStyle = true

	return [
		...neostandard({
			env: options?.env,
			globals: options?.globals,
			ts: options?.ts,
			// ignores: [
			// ...require('neostandard').resolveIgnoresFromGitignore(),
			// ],
			noJsx: true,
			noStyle: noNeostandardStyle,
			semi: false,     // no semicolons
		}),

		// // TODO: let's do in in v5 or later
		// // #fixNEverywhere
		// plugins.n.configs['flat/recommended'],

		// jsdoc.configs['flat/recommended-typescript-flavor'],

		pluginUnicorn.configs['flat/recommended'],

		{
			name: 'volebo/default/plugins',
			plugins: {
				'boundaries': pluginBoundaries,
				'@stylistic': pluginStylistic,
			},
		},

		// temporary copied neostandard configs
		noNeostandardStyle ? partsStyle.config : {},
		noNeostandardStyle ? partsMdrnz.modernizationStyles : {},

		// =========================================================================
		// volebo config:
		// =========================================================================
		{
			name: 'volebo/default',

			languageOptions: {
				// ecmaVersion: 2023, // 14,
				// ecmaVersion: 2025,
				ecmaVersion: 2026,
				sourceType: 'module',
			},


			rules: {
				...pluginBoundaries.configs.recommended.rules,


				// TODO: #objectConstructor - should be implemented as extended `no-object-constructor` rule
				'no-restricted-syntax': ['error',
					{
						selector: 'NewExpression[callee.name="Object"][arguments.length>0]',
						message: 'Function expressions are not allowed.',
					},
				],

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

				'no-shadow':     ['error', {
					builtinGlobals: true,
					hoist: 'all',
					ignoreOnInitialization: true,
				}],

				// IT must not be an error, but!
				// because of different behaviour for one arg VS many args -
				// this make such code error prone!
				'no-array-constructor': ['error'],

				// there must be a reason for bitwise operators in JS,
				// although - it is still appropriate way of writing JS (innit?)
				'no-bitwise': ['warn'],
				'no-implicit-coercion': ['warn', {
					disallowTemplateShorthand: true,
				}],

				'guard-for-in':  ['error'],
				'no-console':    ['error'],  // use `debug` or other packages, or add explicit "eslint-ignore" for lines with console.xxx

				'no-plusplus':   ['error', {
					allowForLoopAfterthoughts: true,
				}],
				'no-param-reassign': ['error', {
					props: false,
				}],

				// -----------------------------------------------------------------
				// N n-node node-n
				// -----------------------------------------------------------------
				// #fixNEverywhere
				'n/hashbang': ['error'],

				// -----------------------------------------------------------------
				// @stylistic
				// -----------------------------------------------------------------

				'@stylistic/operator-linebreak': ['error', 'before'],
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
					singleLine: {
						beforeColon: false,
						afterColon: true,
						mode: 'minimum',
					},
					multiLine: {
						beforeColon: false,
						afterColon: true,
						mode: 'minimum',
					},

					// mk @ 2024-10-20: it doesn't allow to write "objects" without aligning (and I do it a lot)
					// align: {beforeColon: false, afterColon: true, mode: 'minimum', on: 'value', },
				}],
				'@stylistic/no-multi-spaces': ['warn', {
					ignoreEOLComments: true,
					includeTabs: true,
					exceptions: {
						// I like to align "import" declarations
						ImportDeclaration: true,
						ExportAllDeclaration: true,
						ExportNamedDeclaration: true,
						Identifier: true,

						// for object expressions there is `key-spacing`
						Property: true,
						ObjectExpression: true,
					},
				}],
				'@stylistic/no-multiple-empty-lines': ['error', {
					max: 2,
					maxBOF: 0,
					maxEOF: 1,
				}],
				'@stylistic/no-trailing-spaces': ['error'],

				'@stylistic/no-mixed-spaces-and-tabs': ['error'],
				'@stylistic/no-tabs': ['off', { allowIndentationTabs: true }],
				'@stylistic/quote-props': ['error', 'consistent', { 'keywords': true }],
				'@stylistic/semi': ['error', 'never'],
				'@stylistic/quotes': ['error', 'single', {
					avoidEscape: true,
					allowTemplateLiterals: 'avoidEscape',
				}],

				// -----------------------------------------------------------------
				// UNICORN
				// -----------------------------------------------------------------

				// need to consider it again
				// but we use `Number` or `Boolean`, so let's allow `BigInt`:
				'unicorn/prefer-bigint-literals': ['off'],

				// // BUG: GL#19: yoda style is not supported by this rule
				'unicorn/explicit-length-check': ['off'],

				// temporary no problem with empty `export {}`
				'unicorn/require-module-specifiers': ['off'],

				// there is no problem with top-level Promise-chains
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

				// well, temporary warn, but most probably will be 'off'
				'unicorn/no-immediate-mutation': ['warn'],

				// -----------------------------------------------------------------

				// what? wait, we like to use null
				// we use DB, and sometimes we need to erase the content of a field
				// without `null` - it is just weird
				'unicorn/no-null': ['off'],

				// because of
				//   https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1193
				// I'm going to disable these three rules, since they make
				// a "not bad"-code look like there is a critical error
				'unicorn/no-array-for-each': ['off'],
				'unicorn/no-array-callback-reference': ['off'],
				'unicorn/no-array-method-this-argument': ['off'],
				'unicorn/no-array-reduce': ['off'],

				// we completely rely on `no-array-constructor` rule
				// and there is nothing bad in calling `new Array(5)` for creating
				// an array of 5 items, it looks better (just an opinion)
				// than Array.from({ length: 5 })
				'unicorn/no-new-array': ['off'],

				// because it complains about `try{} catch (err) {}`
				'unicorn/catch-error-name': ['off'],

				// I like to invert conditions to write a shorter code block first
				'unicorn/no-negated-condition': ['off'],

				// `substring` is just as legal as slice
				'unicorn/prefer-string-slice': ['off'],

				// because explicit better than implicit. you can omit it,
				// but if you typed `undefined` - i won't complain
				'unicorn/no-useless-undefined': ['off'],

				// eslint's defaut "no-lonely-if" is more than enough and this rule
				'unicorn/no-lonely-if': ['off'],

				// because of
				//   https://github.com/sindresorhus/eslint-plugin-unicorn/issues/2636
				//   https://github.com/sindresorhus/eslint-plugin-unicorn/issues/1057
				// and the fact that if there is an optimization - let's do it
				// when and where it matters.
				//
				// Sometimes 3 lines with ".push" is just easier to read
				// Sometimes it is just annoying that Readable.read can't be
				// N-times just because of the "stylistic" rules
				'unicorn/prefer-single-call': ['off'],

				// because `concat` works differently sometimes
				'unicorn/prefer-spread': ['off'],

				// -----------------------------------------------------------------
				// TODO: MAYBE THESE TOO:
				// -----------------------------------------------------------------
				// '@stylistic/object-property-newline': ['off'],

				// unicorn/switch-case-braces
				// unicorn/prefer-string-raw
			},
		},

		{
			name: 'volebo/default/ignores',
			ignores: [
				'bower_components/*',
				'coverage/',
				'docker/',
				'log/',
				'node_modules/*',
				'tmp/',
				'dist/',
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
		...partsMocha.config,
		...partsBrowser.config,
	]
}

const defaultConfig = eslintConfigVolebo()
export default defaultConfig
