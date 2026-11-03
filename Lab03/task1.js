'use strict'

function random(min, max) {
    if (max === undefined) {
    max = min;
    min = 0;
}
const span = max - min + 1;

return min + Math.floor(Math.random() * span);
}
console.log(random(15));
console.log(random(7, 44))