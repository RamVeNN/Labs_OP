'use strict';

const createUser = (name, city) => {
return {name, city};
}

console.log(createUser('Jindrich', 'Skalitz'));

module.exports = { createUser };
