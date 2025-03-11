import assert from 'node:assert'

const x = BigInt(1)
const y = x + 1

assert.ok(y, 'actually not ok')
