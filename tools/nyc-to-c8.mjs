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

import $fs     from 'node:fs'
import $path   from 'node:path'
import nycCfg  from '../nyc.config.cjs'

// './.c8rc.json'
const targetFile = process.argv?.[2]

const jsonStr = JSON.stringify(nycCfg, null, 2)

if (targetFile) {
	$fs.writeFile($path.join(process.cwd(), targetFile), jsonStr, { encoding: 'utf8' }, (err, __data) => {
		if (err) {
			// eslint-disable-next-line no-console
			console.error(err)
		}
	})
} else {
	// eslint-disable-next-line no-console
	console.log(jsonStr)
}
