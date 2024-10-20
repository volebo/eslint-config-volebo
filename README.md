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
[![Build Status](https://gitlab.com/volebo/eslint-config-volebo/badges/master/pipeline.svg?ignore_skipped=true)](https://gitlab.com/volebo/eslint-config-volebo)
[![npm downloads](https://img.shields.io/npm/dm/eslint-config-volebo.svg)](https://www.npmjs.com/package/eslint-config-volebo)
[![Known Vulnerabilities](https://snyk.io/test/gitlab/volebo/eslint-config-volebo/badge.svg)](https://snyk.io/test/gitlab/volebo/eslint-config-volebo)


Common style guide for all Volebo.Net projects

## Install

```shell
npm install -D eslint-config-volebo eslint
```

Then create an `eslint.config.js` file in the root of your project:

```javascript
import volebo from 'eslint-config-volebo'

export default [
	...volebo,
]
```

## SHORT

- preferably ESM
- `<tab>`
- no semicolons

### Based on

[![neostandard javascript style](https://img.shields.io/badge/code_style-neostandard-7fffff?style=flat&labelColor=ff80ff)](https://github.com/neostandard/neostandard)

- neostandard
- eslint-plugin-unicorn
- eslint-plugin-mocha

### Old versions

See [README.old.md](./README.old.md)

## LICENSE

See [LICENSE](./LICENSE)
