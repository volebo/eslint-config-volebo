import Debug from 'debug'
const debug = new Debug('x')

const n = undefFunction(1)
const aVariable = `welcome: ${undefVariable}`

debug('%o %o', n, aVariable)
