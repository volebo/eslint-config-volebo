import Debug from 'debug'
const debug = new Debug('x')

const arr5 = new Array(2, 2)

const arr6 = new Array(...arr5)

debug('bad arrays', arr5, arr6)
