import Debug          from 'debug'

const debug = new Debug('volebolint:sample:01')


// =============================================================================
// classes
// =============================================================================


class Animal {
	#name

	constructor (n) {
		this.#name = n
	}
}

const zebra = new Animal('zebra')
debug(zebra)

if (null === zebra) {
	for (const x of ['a', 'b']) {
		debug(x)
	}
}

let anObject = {
	'require': ['esm'],
	'report-dir': './tmp/coverage',
	'temp-dir':   './tmp/.nyc_output',
}
// now inline object:
anObject = { name: 12, surname: 'bobbbyyyy' }
debug(anObject)
