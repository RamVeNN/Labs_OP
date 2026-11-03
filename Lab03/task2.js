'use strict'

function generateKey(length, characters) {
    let key = '';
     for (let i = 0; i < length; i++) {
        const index = Math.floor(Math.random() * characters.length);
        key += characters[index];
    }
    return key;
}

const key = generateKey(10, 'Llanfairpwllgwyngyllgogerychwyrndrobwllllantysiliogogogoch');

console.log(key);