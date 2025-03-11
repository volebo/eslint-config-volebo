import assert from 'node:assert'

const str = '12'

const num = +str
const zug = '' + num
const bl1 = !!zug
// eslint-disable-next-line no-bitwise
const bl2 = ~str.indexOf('.')
const ss1 = `${bl1}`

assert.ok(bl2)
assert.ok(ss1)
