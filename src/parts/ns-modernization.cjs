/*
--------------------------------------------------------------------------------
The MIT License (MIT)

Copyright (c) 2024 neostandard contributors

Permission is hereby granted, free of charge, to any person obtaining a copy
of this software and associated documentation files (the "Software"), to deal
in the Software without restriction, including without limitation the rights
to use, copy, modify, merge, publish, distribute, sublicense, and/or sell
copies of the Software, and to permit persons to whom the Software is
furnished to do so, subject to the following conditions:

The above copyright notice and this permission notice shall be included in all
copies or substantial portions of the Software.

THE SOFTWARE IS PROVIDED "AS IS", WITHOUT WARRANTY OF ANY KIND, EXPRESS OR
IMPLIED, INCLUDING BUT NOT LIMITED TO THE WARRANTIES OF MERCHANTABILITY,
FITNESS FOR A PARTICULAR PURPOSE AND NONINFRINGEMENT. IN NO EVENT SHALL THE
AUTHORS OR COPYRIGHT HOLDERS BE LIABLE FOR ANY CLAIM, DAMAGES OR OTHER
LIABILITY, WHETHER IN AN ACTION OF CONTRACT, TORT OR OTHERWISE, ARISING FROM,
OUT OF OR IN CONNECTION WITH THE SOFTWARE OR THE USE OR OTHER DEALINGS IN THE
SOFTWARE.

--------------------------------------------------------------------------------

NOTICE

this file was copied from

https://github.com/neostandard/neostandard/blob/main/lib/configs/modernization.js

*/


'use strict'

module.exports.modernization = /** @satisfies {import('eslint').Linter.Config} */ ({
	name: 'neostandard/modernization-since-standard-17',

	rules: {
		'dot-notation': 'off',
		// Caused many regressions
		// 'no-unused-vars': ['error', {
		//   vars: 'all',
		//   args: 'all',
		//   argsIgnorePattern: '^_',
		//   ignoreRestSiblings: true,
		// }],
		'n/no-deprecated-api': 'warn',
	},
})

module.exports.modernizationStyles = /** @satisfies {import('eslint').Linter.Config} */ ({
	name: 'neostandard/style/modernization-since-standard-17',

	rules: {
		'@stylistic/comma-dangle': ['warn', {
			// See https://github.com/neostandard/neostandard/issues/79 for reason behind "ignore"
			arrays: 'ignore',
			enums: 'ignore',
			exports: 'ignore',
			imports: 'ignore',
			objects: 'ignore',
		}],
		'@stylistic/no-multi-spaces': ['error', { ignoreEOLComments: true }],
	},
})
