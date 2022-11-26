# @rohitninawe/validation

[![npm (scoped)](https://img.shields.io/npm/v/@rohitninawe/validation.svg)](https://www.npmjs.com/package/@rohitninawe/validation)
[![npm bundle size (minified)](https://img.shields.io/bundlephobia/min/@rohitninawe/validation.svg)](https://www.npmjs.com/package/@rohitninawe/validation)

Validation the code as much as possible.

## Install
Using npm:

```shell
npm install @rohitninawe/validation
```

or using yarn:

```shell
yarn add @rohitninawe/validation
```

## Usage

```js
import { safeArray, isValidEmail } from '@rohitninawe/validation';
```
---

### safeArray()

If the parameter is not an array, safeArray() will return an empty array to prevent a crash, for instance when using the [.map()](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/map) method.

#### Examples

```js
safeArray([2, 3, 4, "git", {"name": "John Smith"}])
// [2, 3, 4, "git", {"name": "John Smith"}]

safeArray("[1, 2, 3]")
// [1, 2, 3]

safeArray(undefined)
// []    

safeArray(123)
// []

safeArray("")
// []

```
#### Pro Tip

> If you're unsure whether a key or index exists, always use [optional chaining.](https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Operators/Optional_chaining)
> Example:

```
let response = null; // expected output => {"users": {"transaction":[]} };

let transaction = response.users.transaction;
//Uncaught TypeError: Cannot read properties of null (reading 'users')
transaction.map(item => item); //Error

//Using Optional Chaining 🤔👇
let transaction = response?.users?.transaction; //returns undefined
transaction.map(item => item);
//Uncaught TypeError: Cannot read properties of undefined (reading 'map')

//Optional Chaining + safeArray 😎
let transaction = response?.users?.transaction; //returns undefined
safeArray(transaction).map(item => item); //returns an empty array [].

```

### isValidEmail()

Checks the email's valid format

#### Examples

```js
isValidEmail("developer@gmail.com")
// true

isValidEmail("lorem ipsum")
// false

isValidEmail(""); //or any falsy value
// false

```
