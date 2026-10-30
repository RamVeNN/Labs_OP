'use strict';

const {name} = require('./1-let')
const hello = (name) => {
    console.log(`Hello, ${name}!`);
};

hello(name);

module.exports = { hello };