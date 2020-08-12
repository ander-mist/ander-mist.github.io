// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) retorna o array esperado
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 3) não retorna o array [1, 2, 3, 4]
// Faça uma chamada para a função myRemoveWithoutCopy e verifique se o array passado por parâmetro sofreu alterações
// Verifique se a chamada myRemoveWithoutCopy([1, 2, 3, 4], 5) retorna o array esperado

const assert = require('assert');

function myRemoveWithoutCopy(arr, item) {
  for (let i = 0, len = arr.length; i < len; i += 1) {
    if (arr[i] === item) {
      arr.splice(i, 1);
      i -= 1;
      len -= 1;
    }
  }

  return arr;
}

// implemente seus testes aqui
let lista = [1,2,3,4];
assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,4], "o array deve retornar 1,2,4");
assert.notDeepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 3), [1,2,3,4], "o array não deve retornar o valor de [1,2,3,4]");

myRemoveWithoutCopy(lista, 1);
assert.strictEqual(lista.length, 3, " o array deve conter 3 posições");

assert.deepStrictEqual(myRemoveWithoutCopy([1,2,3,4], 5), [1,2,3,4], "o array deve retornar o valor de [1,2,3,4]");