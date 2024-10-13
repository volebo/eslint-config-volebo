import Debug          from 'debug'

const debug = new Debug('volebolint:sample:01')

const x = {
	name: 'oleg'
}

function add (
	a,
	b
) {
	return a + b
}

debug(add(x,
	2
))
