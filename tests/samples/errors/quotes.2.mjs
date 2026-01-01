import Debug from 'debug'
const debug = new Debug('x')


const x = "why do you use doubleqoutes"
const y = `why do you use backticks without params and escaped quotes?`

debug(x, y)
