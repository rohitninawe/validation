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
import { isValidEmail } from '@rohitninawe/validation';

isValidEmail("rohitninawe1020@gmail.com")
//=> true

isValidEmail("rohitninawe1020")
//=> false

isValidEmail(""); //or any falsy value
//=> Uncaught TypeError: Param is not valid to check.


//safeArray() will return an empty array if the parameter is not an array to avoid crash issue, for example when you use .map function.
safeArray([2,3,4,"apple", {"package": "@rohitninawe/validation"}])
//=> [2,3,4,"apple", {"package": "@rohitninawe/validation"}]

safeArray(undefined)
//=> []    

safeArray(123)
//=> []
safeArray("")
//=> []

```
