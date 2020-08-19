    
const assert = require('assert');

const arrays = [
    ["1", "2", "3"],
    [true],
    [4, 5, 6]
];


function flatten(arrays) {
  // escreva seu código aqui
  const novo = arrays.reduce((acumulator,currentValue) => acumulator.concat(currentValue));
  return novo;
}

assert.deepEqual(flatten(arrays), ["1", "2", "3", true, 4, 5, 6]);