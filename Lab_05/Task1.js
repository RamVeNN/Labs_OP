'use strict'

function seq(...args) {
    return function next(value) {
        if (typeof value === 'number') {
            return args.reduceRight((result, fn) => fn(result), value);
        }

        return seq(...args, value);
    };
}

console.log(
    seq(x => x + 1)
       (x => x * 2)
       (x => x / 3)
       (x => x - 4)(7)
); 