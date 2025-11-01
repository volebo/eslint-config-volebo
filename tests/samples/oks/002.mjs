import assert         from 'node:assert'

// crypto is global since Node16 (Added in: v17.6.0, v16.15.0)
import crypto1        from 'node:crypto'
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

// no-useless-return
const anonimousFunction = (ignoreIt) => {
	debug(ignoreIt)
	// no-useless-return
	return
}

// avoiding unused
showAlert(anonimousFunction())

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
assert.ok(zebra)

const zebraCopy = null === zebra
	? undefined
	: zebra
debug(zebraCopy, 'is testing @stylistic/operator-linebreak rule')

if (null === zebra) {
	for (const x of ['a', 'b']) {
		debug(x)
	}
}

// NO unicorn/no-lonely-if
if (null !== zebra) {
	// unicorn/no-lonely-if
	if (undefined !== zebra) {
		debug(zebra)
	}
}

// NO unicorn/prefer-string-slice
showAlert('long message, let us cut it'.substring(0, 4))

const smallBigInt = BigInt('12312312312312312312312312313123123123131313123123')
debug(smallBigInt + BigInt(1))

// NO unicorn/no-null
const cow = new Animal('cow', {
	wings: null,
})
showAlert(cow)

// NO no-shadow when a variable is not yet initialized
const noShadow = (noShadow => noShadow)()
showAlert(noShadow)


// whitespace
const menu = [
	{ text:           'API: Graph(i)QL',                 href: '/ui/graphiql' },
	{ textCollection: 'Long page name 12',               href: '/api/v1/oauth2' },
	{ textHtml:       'HTML: <code>booooooo</code>',     uri:  '/static/files-get.html' },
]

showAlert(menu)


// =============================================================================
// other
// =============================================================================

// TERNARY (multiline-ternary and operator-linebreak)
// ✓ ok
let location = process.env.F1 ? 'localhost' : 'www.api.com'
// ✓ ok
location = process.env.F1
	? 'localhost'
	: 'www.api.com'
debug(location)

debug(crypto1.constants)


// no-implicit-coercion
const boolVar = Boolean(location)
const numVar = Number(boolVar)
const strVar = String(numVar)
assert.ok(strVar)
