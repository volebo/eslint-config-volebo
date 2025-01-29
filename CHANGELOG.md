# CHANGELOG

```
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

All notable changes to this project will be documented in this file. 
See [Conventional Commits](https://conventionalcommits.org) for commit guidelines.


--------------------------------------------------------------------------------
>
> All notable changes to this project will be documented in this file.
>
>
> **This file MUST be filled only by maintainers, using messages from pull**
> **requests.**
>
> new release template
>
> ## [Unreleased] - yyyy-mm-dd
>
> ### Added
> ### Changed
> ### Fixed
> ### Removed
>
--------------------------------------------------------------------------------

# [4.2.0](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v4.1.0...release/eslint-config-volebo/v4.2.0) (2025-01-29)


### Bug Fixes

* **rules:** disable `mocha/no-top-level-hooks` and add Mocha sample `x.spec.mjs` ([b7b228c](https://gitlab.com/volebo/eslint-config-volebo/commit/b7b228cc48b2a13a7f41a725ee8db1fc139001f4))
* **rules:** GL-18 adjusting spaces/tabs for indentation/alignment (another attempt) ([0b1b617](https://gitlab.com/volebo/eslint-config-volebo/commit/0b1b617d3e6e8198cc3f36a03efb2308da188eae))


### Features

* **rules:** GL-10 add rule `no-shadow` and its dull copy `no-shadow-restricted-names` ([f224c62](https://gitlab.com/volebo/eslint-config-volebo/commit/f224c622ae53e3e5d7eeb1e4bb37b03097779e65))



# [4.1.0](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v4.0.0...release/eslint-config-volebo/v4.1.0) (2025-01-28)


### Bug Fixes

* **deps:** fix leaks caused by neostandard 0.12 ([943869c](https://gitlab.com/volebo/eslint-config-volebo/commit/943869c740ee8cfa0bc2f2cc27cc1b0b66773044))
* **internals:** remove JSON hack for `structuredClone` ([df743c9](https://gitlab.com/volebo/eslint-config-volebo/commit/df743c98d36660123495f5d1d5afffaad394462d))


### Features

* **config:** add names to configuration sections ([0977da4](https://gitlab.com/volebo/eslint-config-volebo/commit/0977da46ae84aed04a8693d8c065ee1548e28b3c))
* **internals:** generate the default config using a function and export both ([566794b](https://gitlab.com/volebo/eslint-config-volebo/commit/566794b29971a5e7af98e0c65932db815a89afb8))
* **rules:** add `n/hashbang` rule ([a0d742c](https://gitlab.com/volebo/eslint-config-volebo/commit/a0d742c7980339841d5505e14fee3a090e575f48))



## [4.0.0](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v4.0.0-beta.3...release/eslint-config-volebo/v4.0.0) (2025-01-27)


### Features

- **rules:** **base config was inherited from `neostandard` with `unicorn` plugin**
- **move to ESM**
- migrate to eslint **flat** configs
- **rules:** add missing `no-script-url` rule from v3 (not enabled!) ([d6128a6](https://gitlab.com/volebo/eslint-config-volebo/commit/d6128a620511c4e9ffad77a00255c2b968138bfb))
- **rules:** conf: `strict`, `no-useless-return`, unicorn-rules ([50851a5](https://gitlab.com/volebo/eslint-config-volebo/commit/50851a5d62773f837ca2011054e21de187917417))
- **rules:** restore all rules from old version (v3) ([6e2af77](https://gitlab.com/volebo/eslint-config-volebo/commit/6e2af77fc6319719844e6b4133535dacff714c39))
- 3ee9a48: add new rule (explicitly): `no-extra-semi`
- 787aefa: GL-11, GL-9, GL-13 add new rules:
  - `no-var`
  - `yoda`
  - `comma-style`
  - `no-trailing-spaces`
- a6d44a0: adjust rule `key-spacing`
- 0a13ddd: GL-7 relax rule `mocha/no-mocha-arrows`


### Bug Fixes

- **rules:** disable `prevent-abbreviations` and test for `no-null` ([a530ef8](https://gitlab.com/volebo/eslint-config-volebo/commit/a530ef8075004ad8813794ccfd761ca005a9b908))
* **rules:** `mocha/no-setup-in-describe` now warns ([353b845](https://gitlab.com/volebo/eslint-config-volebo/commit/353b8455b34f9721f25ab77705a0aa6b7161a834))
* **rules:** set `eslint.sourceType` and `eslint.ecmaVersion` CORRECTLY in config ([977bb27](https://gitlab.com/volebo/eslint-config-volebo/commit/977bb27425b412c7ab13c15772862f55e76b79a4))
* **rules:** relax `no-unused-expressions` for test files (with chai-expressions) ([0cc28f1](https://gitlab.com/volebo/eslint-config-volebo/commit/0cc28f168f5ae66089efc8460f9b05c597884a27))
- 1df9486: add tests for `space-before-function-paren`
- 7111bfe: add tests for node 16/18/20

## [4.0.0-beta.3] - 2024-10-21

### Added

- 1df9486: add tests for `space-before-function-paren`
- 7111bfe: add tests for node 16/18/20
- 3ee9a48: add new rule (explicitly): `no-extra-semi`
- 787aefa: GL-11, GL-9, GL-13 add new rules:
  - `no-var`
  - `yoda`
  - `comma-style`
  - `no-trailing-spaces`

### Changed

- a6d44a0: adjust rule `key-spacing`
- 0a13ddd: GL-7 relax rule `mocha/no-mocha-arrows` - it is nice when
  it is a function, but an arrow is ok as well
- f6e6bbd: rename and reorganize tests

--------------------------------------------------------------------------------

## [4.0.0-beta.2] - 2024-10-20

### Changed

- **base config was inherited from `neostandard` with `unicorn` plugin**
- move to ESM
- migrate to eslint **flat** configs

--------------------------------------------------------------------------------

## [3.0.0] - 2022-12-19

### Added

- tests with mocha using programmatic `eslint`

### Changed

**Rules**:

- `no-tabs`: off // because we use tabs in the middle of the LOC
- `indent`: error // now it generates ERROR
- `no-var`: error // yep, no more vars
- `no-const-assign`: error // why not?
- `no-console`: error  // now it is an error. To automatically decline
  contributions (on Travis level) with `console.log` in the PR
- `no-alert`: error // just the same as `no-console`
- `no-param-reassign`: error  // preventing side effects

**ALSO (non rules)**:

- add `parserOptions.ecmaVersion` (by default we use js.es9 == es2018)

--------------------------------------------------------------------------------

## [2.3.5] - 2020-07-13
## [2.3.4] - 2020-07-13

### Added

- `semi` - don't use `;` (see volebo/eslint-config-volebo#7)
- `quotes` - singlequotes (fix volebo/eslint-config-volebo#5)
- `no-console` - why do you want to print to console?
- `no-plusplus` - be careful with this

### Changed

- `no-unused-vars` - now unused function's arguments could start with `__xxx` 

--------------------------------------------------------------------------------

## [2.3.3] - 2016-06-15

--------------------------------------------------------------------------------

## [0.0.1] - 2016-06-15

INIT.
