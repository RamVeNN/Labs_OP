'use strict';

const compose = (...fns) => {
  if (!fns.every(fn => typeof fn === 'function')) {
    throw new TypeError('All arguments must be functions');
  }

  const handlers = [];

  const composed = (x) => {
    let res = x;

    try {
      for (let i = fns.length - 1; i >= 0; i--) {
        res = fns[i](res);
      }

      return res;
    } catch (error) {
      for (const handler of handlers) {
        handler(error);
      }

      return undefined;
    }
  };

  composed.on = (name, handler) => {
    if (name === 'error') {
      if (typeof handler !== 'function') {
        throw new TypeError('Handler must be a function');
      }

      handlers.push(handler);
    }

    return composed;
  };

  return composed;
};

const inc = x => ++x;
const twice = x => x * 2;
const cube = x => x ** 3;

const f = compose(inc, twice, cube);

console.log(f(5)); 

const errorFn = x => {
  throw new Error('Error');
};

const g = compose(inc, errorFn, twice);

g.on('error', e => console.log(e.message));

console.log(g(5)); 

compose(inc, 7, cube); 