'use strict';

const fn = () => {
  const obj1 = { name: 'Gaius' };
  let obj2 = { name: 'Gaius' };

  obj1.name = 'Octavius';
  obj2.name = 'Octavius';
  //obj1 не можна перепризначити, тому що її оголошено через const

  obj2 = { name: 'Gaius Octavius' };
};

module.exports = { fn };