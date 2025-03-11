import Debug from 'debug'
const debug = new Debug('x')

// ✓ ok
let location = process.env.F1 ? 'localhost' : 'www.api.com'

// ✓ ok
location = process.env.F1
	? 'localhost'
	: 'www.api.com'

// ✗ avoid
location = process.env.F1 ?
	'localhost' :
	'www.api.com'

debug(location)
