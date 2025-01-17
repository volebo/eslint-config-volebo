import Debug from 'debug'
const debug = new Debug('x')

function fun1 (a, b, c) {
	a = a + 1
	b = new Date()
	return [a, b, c]
}

const x = 4
const n = fun1(x, 5, 6)

debug(n)
