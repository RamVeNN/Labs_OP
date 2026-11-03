'use strict';

function ipToInt(ip = '127.0.0.1') {
    return ip
        .split('.')
        .map(Number)
        .reduce((acc, byte) => (acc << 8) + byte, 0) >>> 0;
}

console.log(ipToInt());
console.log(ipToInt('10.0.0.1'));
console.log(ipToInt('1.0.0.0'));