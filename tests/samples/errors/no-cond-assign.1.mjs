import Debug from 'debug'
const debug = new Debug('x')

let name2 = '123'
let true2 = true
const n = {
	name: '123',
}
do {
	n.name = 'whoa'
	debug(n)
	name2 = n.name
	true2 = !true2
} while (name2 = n.name && true2) // error here

debug(name2)
