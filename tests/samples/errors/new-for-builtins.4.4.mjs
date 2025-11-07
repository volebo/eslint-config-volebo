import Debug from 'debug'
const debug = new Debug('x')


const n2 = new Number(2)
const f2 = new Boolean(0)
const d2 = new String('asdf')
const arr4 = Array(n2, f2, d2)

debug('bad arrays', arr4)
