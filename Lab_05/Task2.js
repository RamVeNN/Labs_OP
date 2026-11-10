'use strict';

function array() {
    const items = [];

    function get(index) {
        return items[index];
    }

    get.push = function(value) {
        items.push(value);
    };

    get.pop = function() {
        return items.pop();
    };

    return get;
}

const arr = array();

arr.push('first');
arr.push('second');
arr.push('third');

console.log(arr(0)); 
console.log(arr(1)); 
console.log(arr(2)); 

console.log(arr.pop()); 
console.log(arr.pop()); 
console.log(arr.pop()); 

console.log(arr.pop()); 