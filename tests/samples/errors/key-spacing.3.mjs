import Debug		from 'debug'
const debug = new Debug('volebolint:sample:01')


const x = {
	name : 'oleg',
}
debug(x)

const y = {
	wrongWhitespaces :new Date(),
}
debug(y)


const anObject = {
	'require': ['esm'],
	'report-dir': './tmp/coverage',
	'temp-dir':   './tmp/.nyc_output',
}
debug(anObject)
