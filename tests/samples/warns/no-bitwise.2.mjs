import Debug from 'debug'
const debug = new Debug('x')

const n = 512 << 3
const minusOne = ~1

debug('%o %o', n, minusOne)
