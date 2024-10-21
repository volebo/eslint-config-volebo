import Debug          from 'debug'

const debug = new Debug('volebolint:sample:01')


// =============================================================================
// objects
// =============================================================================

let anObject = {
	'require': ['esm'],
	'report-dir': './tmp/coverage',
	'temp-dir':   './tmp/.nyc_output',
}
// now inline object:
anObject = { name: 12, surname: 'bobbbyyyy' }


// avoiding unused
debug(anObject)

// =============================================================================
// functions
// =============================================================================

function showAlert (message) {
	return message
}

const anonimousFunction = (ignoreIt) => {
	debug(ignoreIt)
}

// avoiding unused
debug(showAlert(anonimousFunction()))

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

// avoiding unused
debug(zebra)
