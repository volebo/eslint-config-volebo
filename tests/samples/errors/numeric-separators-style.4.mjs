import Debug from 'debug'
const debug = new Debug('x')


// ✓ ok
const ok1 = BigInt('12312312312312312312312312313123123123131313123123')

// ✓ ok
const ok2a1 = 123_123_123_123_123_123_123_123_123_131_231_231_231_313_123_123n
const ok2a2 = 231313123123n

// ✓ ok
const ok3 = 231313123123.8928 + 10_000_555.123_456

// ✗ avoid
const bad1 = 12_1233 + 1_23

// ✗ avoid
const bad2 = 12_123.00009 + 12345.123_456

debug(ok1, ok2a1, ok2a2, ok3, bad1, bad2)
