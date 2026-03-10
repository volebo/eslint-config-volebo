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
[![Socket Badge](https://badge.socket.dev/npm/package/eslint-config-volebo/latest)](https://socket.dev/npm/package/eslint-config-volebo/overview)
[![Known Vulnerabilities](https://snyk.io/test/gitlab/volebo/eslint-config-volebo/badge.svg)](https://snyk.io/test/gitlab/volebo/eslint-config-volebo)
[![Package Quality](https://packagequality.com/shield/eslint-config-volebo.svg)](https://packagequality.com/#?package=eslint-config-volebo)

Common style guide for all Volebo.Net projects

## Install

```shell
npm install --save-dev eslint-config-volebo eslint
```

Then create an `eslint.config.js` file in the root of your project:

```javascript
import volebo from 'eslint-config-volebo'

export default [
	...volebo,
]
```

Or providing more settings (most of them inherited from [neostandard](https://github.com/neostandard/neostandard?tab=readme-ov-file#configuration-options))

```javascript
import { eslintConfigVolebo } from 'eslint-config-volebo'
import jsdoc from 'eslint-plugin-jsdoc'

export default [
	...eslintConfigVolebo({
		// options
		globals: {
			'MyClass': 'readonly',
		},
	}),
	// other configs:
	jsdoc.configs['flat/recommended-typescript-flavor'],
]
```

## SHORT

- preferably ESM (but works good with CJS in `strict` mode)
- `<tab>` for indentation
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
