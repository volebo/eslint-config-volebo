# eslint-config-volebo

```yaml
################################################################################
#                                                                              #
# db    db  .8888.  dP     888888b 8888ba   .8888.     d8b   db 888888b d8888P #
# 88    88 d8'  `8b 88     88      88  `8b d8'  `8b    88V8  88 88        88   #
# Y8    8P 88    88 88    a88aaa   88aa8P' 88    88    88 V8 88 88aaa     88   #
# `8b  d8' 88    88 88     88      88  `8b 88    88    88  V888 88        88   #
#  `8bd8'  Y8.  .8P 88     88      88  .88 Y8.  .8P dP 88   V88 88        88   #
#    YP     `888P'  88888P 888888P 888888'  `888P'  88 VP    8P 888888P   dP   #
#                                                                              #
################################################################################
```

[![npm version](https://img.shields.io/npm/v/eslint-config-volebo.svg)](https://www.npmjs.com/package/eslint-config-volebo)
[![Build Status](https://app.travis-ci.com/maxkoryukov/eslint-config-volebo.svg?branch=master)](https://app.travis-ci.com/maxkoryukov/eslint-config-volebo)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-volebo.svg)](https://www.npmjs.com/package/eslint-config-volebo)
[![Known Vulnerabilities](https://snyk.io/test/gitlab/volebo/eslint-config-volebo/badge.svg)](https://snyk.io/test/gitlab/volebo/eslint-config-volebo)


Common style guide for all Volebo.Net projects

## Install

```shell
npm install eslint eslint-config-volebo -D
```

## Usage

Then paste this to the `eslint.config.js` in the root of your project:

```javascript
export { default } from 'eslint-config-volebo'

```


### Old `eslint` versions

Just paste this to the `.eslintrc.js` in the root of your project:

```javascript
exports = module.exports = {
  'extends': [
    'eslint-config-volebo',
  ],
}
```

### Very old `eslint` versions

Long time ago `eslint` didn't have such a good support of shared configs, (see
[this issue](https://gitlab.com/eslint/eslint/issues/3458)), but now it does.

If you are still using the old `eslint` this can help:

```javascript
const path = require('path')

exports = module.exports = {
  'extends': [
    path.join(__dirname,
      'node_modules',
      'eslint-config-volebo',
      'index.js'
    )
  ]
}
```

## License

[LICENSE here](LICENSE)
