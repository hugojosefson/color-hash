# Color Hash

Deterministically generate color based on a given string.

[![Build Status](https://travis-ci.org/hugojosefson/color-hash.svg?branch=master)](https://travis-ci.org/hugojosefson/color-hash)
[![npm page](https://img.shields.io/npm/v/@hugojosefson/color-hash.svg)](https://npmjs.com/package/@hugojosefson/color-hash)
[![License MIT](https://img.shields.io/npm/l/@hugojosefson/color-hash.svg)](https://tldrlegal.com/license/mit-license)
[![SemVer 2.0.0](https://img.shields.io/badge/SemVer-2.0.0-lightgrey.svg)](http://semver.org/spec/v2.0.0.html)

_Based on [zenozeng/color-hash](https://github.com/zenozeng/color-hash); forked to restructure and future-proof._

## Demo

https://hugojosefson.github.io/color-hash/demo/

## Install

```bash
yarn add --dev @hugojosefson/color-hash

 # or

npm install --save @hugojosefson/color-hash
```

## Usage

```javascript
const ColorHash = require('@hugojosefson/color-hash');
const colorHash = new ColorHash();

// in HSL, Hue ∈ [0, 360), Saturation ∈ [0, 1], Lightness ∈ [0, 1]
colorHash.hsl('Hello World'); // [ 225, 0.65, 0.35 ]

// in RGB, R, G, B ∈ [0, 255]
colorHash.rgb('Hello World'); // [ 135, 150, 197 ]

// in HEX
colorHash.hex('Hello World'); // '#8796c5'
```

### Custom Hash Function

```javascript
const ColorHash = require('@hugojosefson/color-hash');

const customHash = function(str) {
    let hash = 0;
    for (let i = 0; i < str.length; i++) {
        hash += str.charCodeAt(i);
    }
    return hash;
};

const colorHash = new ColorHash({hash: customHash});
colorHash.hsl('Hello World!');
colorHash.rgb('Hello World!');
colorHash.hex('Hello World!');
```

### Custom Hue

```javascript
const colorHash = new ColorHash({hue: 90});
```

```javascript
const colorHash = new ColorHash({hue: {min: 90, max: 270}});
```

```javascript
const colorHash = new ColorHash({hue: [ {min: 30, max: 90}, {min: 180, max: 210}, {min: 270, max: 285} ]});
```

### Custom Lightness

```javascript
const colorHash = new ColorHash({lightness: 0.5});
```

```javascript
const colorHash = new ColorHash({lightness: [0.35, 0.5, 0.65]});
```

### Custom Saturation

```javascript
const colorHash = new ColorHash({saturation: 0.5});
```

```javascript
const colorHash = new ColorHash({saturation: [0.35, 0.5, 0.65]});
```

## Dev

### Test

```bash
yarn
yarn test
```

#### Coverage Report

https://hugojosefson.github.io/color-hash/coverage/lcov-report/src/

### Build standalone `dist/color-hash.js`

```bash
yarn
yarn build
```
