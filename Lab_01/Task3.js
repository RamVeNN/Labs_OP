'use strict'

const arr = [
    true, 'hello', 5, 12, -200, false, false, 'word', 'KPI', true, 15, false, 28, 'js'
];
const counters = {};

for (const element of arr) {
const type = typeof element;
 if (counters[type] === undefined){
    counters[type] = 0;
 }
counters[type]++;
}   
console.log(counters)