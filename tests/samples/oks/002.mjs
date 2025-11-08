import assert         from 'node:assert'

// crypto is global since Node16 (Added in: v17.6.0, v16.15.0)
import crypto1        from 'node:crypto'
import Debug          from 'debug'

const debug = new Debug('volebolint:sample:01')


// =============================================================================
// primitive types
// =============================================================================
const n1 = Number(1)

const f1 = Boolean(n1)

const s1 = String(f1)
debug(s1)

const b1 = BigInt('12312312312312312312312312313123123123131313123123')
const b2 = 123_123_123_123_123_123_123_123_123_131_231_231_231_313_123_123n
debug(b1, b2)

// ----------
// embed NON primitive types:
// ----------

const _now = new Date()
debug(_now)

// Create an array with 3 items (though, empty items, but arr.lenght === 3)
// this is the only way to use `new Array`
const arr1 = new Array(3)
arr1[0] = s1


// ----------
// objects
// ----------

let anObject = {
	'we write in': ['esm', 'javascript'],
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
// flow control: conditions
// =============================================================================

// TERNARY (multiline-ternary and operator-linebreak)
// ✓ ok
let location = process.env.F1 ? 'localhost' : 'www.api.com'
// ✓ ok
location = process.env.F1
	? 'localhost'
	: 'www.api.com'
debug(location)

const arr434 = [1, 'a', false]
if (0 < arr434.length) {
	debug('arr434 is not empty')
}

// =============================================================================
// flow control: errors
// =============================================================================

if ('' === process.env.A_REQUIRED_VAR) {
	const err = new Error('a consumer cancelled by the server')
	throw err
}
// =============================================================================
// other
// =============================================================================

debug(crypto1.constants)


// no-implicit-coercion
const boolVar = Boolean(location)
const numVar = Number(boolVar)
const strVar = String(numVar)
assert.ok(strVar)
