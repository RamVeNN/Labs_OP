'use strict'

const pipe = (...fns) => {
    if(!fns.every(fn => typeof fn === 'function')) {
        throw new TypeError("Error");
    }

    return x => fns.reduce((acc, fn) => fn(acc), x);
} 

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = pipe(inc, twice, cube);
console.log(f(5));
console.log(pipe(inc, inc)(7));
pipe(inc, 7, cube);