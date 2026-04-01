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
# Copyright (C) 2016 Volebo <dev@volebo.net>
# Copyright (C) 2016 Maksim Koryukov <maxkoryukov@volebo.net>
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

'use strict'

module.exports = {
	'all': true,

	// "sourceMap": false,
	// "instrument": false,

	'reporter': [
		'html',
		'lcov',
		'text',
		'text-summary',
		// 'json-summary',
	],

	'require': ['esm'],

	'report-dir': './tmp/coverage',
	'temp-dir':   './tmp/.nyc_output',

	'include': [
		'src/**',
	],

	'exclude': [
		'**/*.test.js',
		'**/*.test.mjs',
		'**/*.spec.js',
		'**/*.spec.mjs',
		'tests/bootstrap.mjs',
	],
	// ["coverage/**","packages/*/test/**","test/**","test{,-*}.js","**/*{.,-}test.js","**/__tests__/**","**/{ava,babel,jest,nyc,rollup,webpack}.config.js"]]

	'excludeNodeModules': true,
}
