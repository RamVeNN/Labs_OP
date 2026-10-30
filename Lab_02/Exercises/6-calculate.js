'use strict';



const square = (x) => {
  return x*x;
}

const cube = (x) => {
  return x*x*x;
}
const average = (a, b) => {
  return (a + b) / 2;
}

const calculate = () => {
const array = [];

for (let i = 0; i <= 9; i++){
  const resultSquare = square(i);
  const resultCube = cube(i);
  const resultAverage = average(resultSquare, resultCube);
  array.push(resultAverage);
}
return array;
}

console.log(calculate())
module.exports = { square, cube, average, calculate };
