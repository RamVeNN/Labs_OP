'use strict';

const phonebook = {
  'Ivan': '+380727262395',
  'Gaius Octavius': '+380508800131'
}

const findPhoneByName = (name) => phonebook[name];

console.log(findPhoneByName('Gaius Octavius'))

module.exports = { phonebook, findPhoneByName };
