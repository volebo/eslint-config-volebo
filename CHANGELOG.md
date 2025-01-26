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
