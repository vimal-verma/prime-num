
prime-num is an math library for JavaScript and Node.js. It help you to find all prime number.

[![Version](https://img.shields.io/npm/v/prime-num)](https://www.npmjs.com/package/prime-num)
[![license](https://img.shields.io/npm/l/prime-num)](https://www.npmjs.com/package/prime-num)
[![download](https://img.shields.io/npm/dw/prime-num)](https://www.npmjs.com/package/prime-num)
[![download](https://img.shields.io/npm/dt/prime-num)](https://www.npmjs.com/package/prime-num)
[![Fork](https://img.shields.io/github/forks/letskhabar/prime-num?label=fork&style=social)](https://github.com/letskhabar/prime-num/fork)
[![Star](https://img.shields.io/github/stars/letskhabar/prime-num?style=social)](https://github.com/letskhabar/prime-num/stargazers)
[![watch](https://img.shields.io/github/watchers/letskhabar/prime-num?style=social)](https://github.com/letskhabar/prime-num/watchers)


## Features

- find all prime number upto n. [ primes(n) ]
- find all prime number between m to n. [ primebtw(m,n) ]
- find number of prime upto n.  [ primelength(n) ]
- find number of prime between m to n. [ primebl(m,n) ]
- find a number n is Prime or not.  [ isPrime(n) ]

- Can be used in command line as well.
- Runs on any JavaScript engine.
- Is easily extensible.
- Open source.

## Usage

prime-num can be used in both node.js and in the browser.

Install prime-num using [npm](https://www.npmjs.com/package/prime-num):

    npm install prime-num


```js
const {primes,primelength,isPrime,primebtw,primebl} = require('prime-num');

console.log(primes(25));       // 2,3,5,7,11,13,17,19,23
console.log(primelength(25));  // 9
console.log(isPrime(25));      // false
console.log(primes(53));       // 2,3,5,7,11,13,17,19,23,29,31,37,41,43,47,53
console.log(primelength(53));  // 16
console.log(isPrime(53));      // true
console.log(primebtw(53,10));  // 11,13,17,19,23,29,31,37,41,43,47,53
console.log(primebl(53,10));   // 12
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