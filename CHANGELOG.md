# CHANGELOG

```css
########################################################################
#                                                                      #
# db   db  .888.  dP    88888b 888ba   .888.     d8b  db 88888b d8888P #
# 88   88 d8' `8b 88    88     88 `8b d8' `8b    88V8 88 88       88   #
# Y8   8P 88   88 88    88aa   88a8P' 88   88    88 VL88 88aa     88   #
# `8b d8' 88   88 88    88     88 `8b 88   88    88  V88 88       88   #
#  `8V8'  Y8. .8P 88    88     88 .88 Y8. .8P dP 88  `88 88       88   #
#   `Y'    `88P'  8888P 88888P 88888'  `88P'  88 VP   8P 88888P   dP   #
#                                                                      #
########################################################################
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

## [5.0.1](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v5.0.0...release/eslint-config-volebo/v5.0.1) (2026-03-03)

## [5.0.0](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v4.3.0...release/eslint-config-volebo/v5.0.0) (2026-03-03)


### ⚠ BREAKING CHANGES

* **deps:** migrated to eslint@10

### Features

* **deps:** migrated to eslint@10 ([82e2e74](https://gitlab.com/volebo/eslint-config-volebo/commit/82e2e74155a905269c0a341feb8c2a9163127ec0))
* **globals:** allow having `fn2sn` in test files (as a global fn) ([98dd39f](https://gitlab.com/volebo/eslint-config-volebo/commit/98dd39f1baf271341bb7e4c0d8138845080f3b37))
* **rules:** upgrade language ecmaVersion to 2026 ([3ec4519](https://gitlab.com/volebo/eslint-config-volebo/commit/3ec4519d19c68fe94e2a62741a9c90a6a2def3f2))
* **rules:** upgrade `@stylistic` plugin (and copy entire configs from neostandard) ([8e3b16d](https://gitlab.com/volebo/eslint-config-volebo/commit/8e3b16d76941ddc45878e0fc8565b5ff93ab42db))
* **rules:** `@stylistic/no-multiple-empty-lines` allows 0 e.lines at beginning ([cf93c43](https://gitlab.com/volebo/eslint-config-volebo/commit/cf93c435a8fb08884c4786f6720f1f63eb6ee067))
* **rules:** `new-for-builtins` with crazy restriction for `new Object(123)` ([959d687](https://gitlab.com/volebo/eslint-config-volebo/commit/959d6876eeee28f20e294d75f34a584069a181aa))
* **rules:** `no-array-constructor` - allows `new Array(LEN)` but nothing else ([d6df476](https://gitlab.com/volebo/eslint-config-volebo/commit/d6df47643ab41995260b84dca7cd9411b780edc4))
* **rules:** add `chaiFile` to globals for test-files ([25df4ed](https://gitlab.com/volebo/eslint-config-volebo/commit/25df4ed788b5ad3fa6c2f29b585dc6e3d2cdbcd7))
* **rules:** add `unicorn/numeric-separators-style` rule ([0b044a8](https://gitlab.com/volebo/eslint-config-volebo/commit/0b044a814fccc4cc86b82b125ff1c5f0ba90c60c))
* **rules:** err=>warn for `unicorn/no-immediate-mutation` ([566dac6](https://gitlab.com/volebo/eslint-config-volebo/commit/566dac6850dff5175c0a48b248943b67e4bb06a8))

### Bug Fixes

* **deps:** upgrade dependencies (neostandard) ([cac4442](https://gitlab.com/volebo/eslint-config-volebo/commit/cac444296048ae10847176e939881ac9c0d228d3))
* **repo:** migrate `package.json` scripts to `pnpm` ([24ef2a2](https://gitlab.com/volebo/eslint-config-volebo/commit/24ef2a283e0076e3f7c8ce51523c3d2369223f9b))
* **rules:** disable `unicorn/no-useless-undefined` ([3e20c3b](https://gitlab.com/volebo/eslint-config-volebo/commit/3e20c3bfcf79afefba9d79b99a3e360737948ed6))
* **rules:** disable `unicorn/prefer-bigint-literals` ([585c641](https://gitlab.com/volebo/eslint-config-volebo/commit/585c6412a3e9e61ece9b0bb1d05ef08d18a0ca80))
* **rules:** disable `unicorn/require-module-specifiers` ([9bea12d](https://gitlab.com/volebo/eslint-config-volebo/commit/9bea12d629605d1ec85531affe02ed3ea02b58ed))
* **rules:** disable `unicorn/explicit-length-check` ([bec7166](https://gitlab.com/volebo/eslint-config-volebo/commit/bec7166e9b6a001ebf429f78fad50e0635438287))
* **rules:** disable `unicorn/prefer-single-call` ([6f463eb](https://gitlab.com/volebo/eslint-config-volebo/commit/6f463eb791d4d455fbe0e097365082703603dd6e))
* **rules:** disable `unicorn/prefer-spread` ([4a2afde](https://gitlab.com/volebo/eslint-config-volebo/commit/4a2afde906524ff13657c7ff77e09c0ccf999188))
* **rules:** improve `@stylistic/operator-linebreak` ([36d8c58](https://gitlab.com/volebo/eslint-config-volebo/commit/36d8c58ab51a03759bb55ffbff7452cccbbf2048))
* **rules:** relax `@stylistic/quotes` ([47013ed](https://gitlab.com/volebo/eslint-config-volebo/commit/47013edb81fb517b8ea20a0350e0af0ac3a0e3a0))
* **cicd:** fix CICD scripts (npm/pnpm problems in repo/monorepo) ([14adc7a](https://gitlab.com/volebo/eslint-config-volebo/commit/14adc7ac5d94d3e51ae95fcb191d09a346b15173))


## [4.3.0](https://gitlab.com/volebo/eslint-config-volebo/compare/release/eslint-config-volebo/v4.2.0...release/eslint-config-volebo/v4.3.0) (2025-04-19)


### Features

* **pkg:** export `eslintConfigVolebo` for providing options (to neostandard mostly) ([d3524ca](https://gitlab.com/volebo/eslint-config-volebo/commit/d3524ca4dca5038056923e07c2d21192f4b3332b))
* **plugins:** add eslint-plugin-boundaries with recommended rules ([9181989](https://gitlab.com/volebo/eslint-config-volebo/commit/9181989358d05b76cd4701c88cee58f65ac3e002))
* **rules:** add `no-implicit-coercion` rule (warn) ([2da61fb](https://gitlab.com/volebo/eslint-config-volebo/commit/2da61fba36abb41d952b1b2ab80c819337dcd16a))
* **rules:** upgrade language ecmaVersion to 2025 ([c4b7686](https://gitlab.com/volebo/eslint-config-volebo/commit/c4b76865d1464a17acb0cb52b23de2f49fa59054))


### Bug Fixes

* **rules:** disable `unicorn/no-array-for-each` ([ee5c1da](https://gitlab.com/volebo/eslint-config-volebo/commit/ee5c1daf831b2532580e9ca0383464d732879a13))
* **rules:** relax `no-bitwise` rule (now it is a warning) ([3e697a0](https://gitlab.com/volebo/eslint-config-volebo/commit/3e697a0861355a8570f7f121eecdf654b3644009))

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
