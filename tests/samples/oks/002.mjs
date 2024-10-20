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

if (null === zebra) {
	for (const x of ['a', 'b']) {
		debug(x)
	}
}

debug(zebra)
