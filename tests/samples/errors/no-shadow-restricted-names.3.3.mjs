import Debug from 'debug'
const debug = new Debug('x')

import { x as NaN } from './my-nan.mjs'

function Infinity (isPositive) {
	return isPositive
		? Math.POSITIVE_INFINITY
		: Math.NEGATIVE_INFINITY
}

const undefined = 12


debug(NaN, undefined, Infinity(1))


// function printSomething (console) {
// 	debug(console)
// }
