# @rohitninawe/validation

[![npm (scoped)](https://img.shields.io/npm/v/@rohitninawe/validation.svg)](https://www.npmjs.com/package/@rohitninawe/validation)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rohitninawe/validation.svg)](https://www.npmjs.com/package/@rohitninawe/validation)

Validation code.

## Install

```
$ npm install @rohitninawe/validation
```

## Usage

```js
import isValidEmail from '@rohitninawe/validation';

isValidEmail("rohitninawe1020@gmail.com")
//=> true

isValidEmail("rohitninawe1020")
//=> false

isValidEmail(""); //or any falsy value
//=> Uncaught TypeError: Param is not valid to check.
```
