import Debug          from 'debug'

const debug = new Debug('volebolint:sample:01')


function noSpace(a) {
	return !a
}

const anonymousFunction = function() {
	return noSpace(1, 5)
}

class Foo {
	constructor({ customFlag }) {
		this.flag = customFlag
	}
}

const asyncAnonFunction = async() => 1

const field = new Foo()

const vv = {
	fn(argument1) {
		return argument1
	},

	field,
}

debug(anonymousFunction(vv, noSpace(2)))

await asyncAnonFunction(vv)
