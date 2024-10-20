import Debug from 'debug'
const debug = new Debug('x')

function animal () {
	return 12
}

const n = new animal()
debug(n)
