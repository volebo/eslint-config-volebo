import Debug from 'debug'
const debug = new Debug('x')


throw new Error('code below now is unreachable')

const x = 1
debug(x)
