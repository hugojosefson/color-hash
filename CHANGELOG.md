# Changelog

All notable changes to this project will be documented in this file.

The format is based on [Keep a Changelog](http://keepachangelog.com/en/1.0.0/)
and this project adheres to [Semantic Versioning](http://semver.org/spec/v2.0.0.html).

## [Unreleased]

_New unreleased changes are listed here, and moved down to a release number when released._

## [2.0.3] - 2017-10-05

### Added

- `keywords` in `package.json`.

## [2.0.2] - 2017-10-05

### Added

- This file, `CHANGELOG.md`.

## [2.0.1] - 2017-10-04

### Changed

- Restructure build, including directories.

## [2.0.0] - 2017-10-04

### BREAKING

- Using [`string-hash`](https://www.npmjs.com/package/string-hash) by default. This changes color of existing strings. Reason for switch is that `string-hash` gives more useful hashes for our purpose. The previous hash function returned same hash for different strings of same length.

## [1.1.0] - 2017-10-04

### Added

- Correctly calculate hue in a range.
- Support multiple hue ranges.
- Test coverage for hue range(s).
- Automatically generate test coverage and browser build before publishing to npm.
- `yarn.lock`
- Connect to [Travis-CI](https://travis-ci.org/hugojosefson/color-hash).
- Publish to npm as [`@hugojosefson/color-hash`](https://npmjs.com/package/@hugojosefson/color-hash).

### Changed

- No need to require `npm install -g` of tools/dependencies.
- Urls etc for forking and publishing to npm scope.
- Building the lib now requires `node@>=6`.
- Improve build.

### Removed

- `bower.json`

---

## [FORKED] - 2017-10-04

Previous releases from 2015-05-18 and earlier via [zenozeng/color-hash](https://github.com/zenozeng/color-hash).
