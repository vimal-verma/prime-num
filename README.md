
prime-num is an math library for JavaScript and Node.js. It help you to find all prime number.

[![Version](https://img.shields.io/npm/v/prime-num)](https://www.npmjs.com/package/prime-num)
[![license](https://img.shields.io/npm/l/prime-num)](https://www.npmjs.com/package/prime-num)
[![download](https://img.shields.io/npm/dw/prime-num)](https://www.npmjs.com/package/prime-num)
[![download](https://img.shields.io/npm/dt/prime-num)](https://www.npmjs.com/package/prime-num)
[![Fork](https://img.shields.io/github/forks/letskhabar/prime-num?label=fork&style=social)](https://github.com/letskhabar/prime-num/fork)
[![Star](https://img.shields.io/github/stars/letskhabar/prime-num?style=social)](https://github.com/letskhabar/prime-num/stargazers)
[![watch](https://img.shields.io/github/watchers/letskhabar/prime-num?style=social)](https://github.com/letskhabar/prime-num/watchers)


## Features

- find all prime number upto n.
- find all prime number from m to n.  // comming soon
- find number of prime upto n.
- find number of prime from m to n.
- Can be used in command line as well.
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source.

## Usage

prime-num can be used in both node.js and in the browser.

Install prime-num using [npm](https://www.npmjs.com/package/prime-num):

    npm install prime-num


```js
const {primeupto,primelength} = require('prime-num');

console.log(primeupto(5));   // 2,3,5
console.log(primelength(5));   // 3
console.log(primeupto(34));  // 2,3,5,7,11,13,17,19,23,29,31
console.log(primelength(34));  // 11
console.log(primeupto(25));  // 2,3,5,7,11,13,17,19,23
console.log(primelength(25));  // 9
console.log(primeupto(53));  // 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53
console.log(primelength(53));  // 16

```

## Run

```
node index.js
```

See the [Getting Started](https://github.com/letskhabar/prime-num) for a more detailed tutorial.


## Documentation

- [Getting Started](https://github.com/letskhabar/prime-num)
- [Examples](#)
- [Overview](https://github.com/letskhabar/prime-num)
- [History](#)



Clone the project from github:

    git clone https://github.com/letskhabar/prime-num.git
    cd prime-num





## License
MIT,  Copyright (C) 2020