'use strict';

const phonebook = [
  { name: 'Ivan', phone: '+380727262395' },
  { name: 'Gaius Octavius', phone: '+380508800131' },
];

const findPhoneByName = (name) => {
  for (const obj of phonebook) {
    if (obj.name === name) return obj.phone;
  }
};

console.log(findPhoneByName('Gaius Octavius'));

module.exports = { phonebook, findPhoneByName };