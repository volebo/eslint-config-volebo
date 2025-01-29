import Debug from 'debug'
const debug = new Debug('x')

const n = 512

if (12 < n) {
	const showAlert = false
	debug(showAlert)
}

function showAlert (a, b) {

	for (const n of b) {
		debug(a, n)
	}
}


showAlert(n, ['a'])

const Object = new Date()
showAlert(Object)


function printSomething (console) {
	debug(console)
}
printSomething(null)


// shadow in catch:
try {
	JSON.parse('asdf')
} catch (Error) {
	debug(Error)
}
