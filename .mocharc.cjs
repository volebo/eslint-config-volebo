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


const MOCHA_TIMEOUT_DEFAULT = Number(process.env.MOCHA_TIMEOUT_DEFAULT || 2000)
const MOCHA_RETRIES = Number(process.env.MOCHA_RETRIES || 0)


module.exports = {
	reporter: 'list',
	// reporter: 'spec',

	recursive: true,
	checkLeaks: true,
	ui: 'bdd',
	require: 'tests/bootstrap.mjs',
	extension: [
		'test.js',
		'test.cjs',
		'test.mjs',
		'spec.js',
		'spec.cjs',
		'spec.mjs',
	],
	retries: MOCHA_RETRIES,

	diff: true,
	package: './package.json',
	// slow: 75,
	timeout: MOCHA_TIMEOUT_DEFAULT,

	spec: [
		// 'tests/**/*.test.js',
		// 'tests/**/*.test.mjs',

		// 'src/**/*.test.js',
		'src/**/*.test.mjs',
		// 'src/**/*.spec.js',
	],
}
