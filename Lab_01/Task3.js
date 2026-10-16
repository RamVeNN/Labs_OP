'use strict'

const arr = [
    true, 'hello', 5, 12, -200, false, false, 'word', 'KPI', true, 15, false, 28, 'js'
];
const counters = {
    number: 0,
    string: 0,
    boolean: 0,
};

for (const element of arr) {
const type = typeof element;
counters[type]++;
}   
console.log(counters)