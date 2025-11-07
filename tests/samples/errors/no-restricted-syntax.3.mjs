// #objectConstructor - should be implemented as extended `no-object-constructor` rule
import Debug from 'debug'
const debug = new Debug('x')

const a = new Object(true)
const b = new Object(1)
const c = new Object('asdf')

debug(a, b, c)
