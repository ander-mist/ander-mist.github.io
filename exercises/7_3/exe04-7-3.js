// Faça uma chamada com um número divisível por 3 e 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 3 e verifique se o retorno é o esperado
// Faça uma chamada com um número divisível por 5 e verifique se o retorno é o esperado
// Faça uma chamada com um número que não é divisível por 3 ou 5 e verifique se o retorno é o esperado
// Faça uma chamada com um parâmetro que não é um número e verifique se o retorno é o esperado

const assert = require('assert');
const { type } = require('os');

function myFizzBuzz(num) {
  if (typeof num !== 'number') return false;
  if (num % 3 === 0 && num % 5 === 0) return 'fizzbuzz';
  if (num % 3 === 0) return 'fizz';
  if (num % 5 === 0) return 'buzz';
  return num;
}

// implemente seus testes aqui

assert.strictEqual(myFizzBuzz(15), 'fizzbuzz', "esse numero não é divisivel por 3 e 5");
assert.strictEqual(myFizzBuzz(9), 'fizz', 'o numero não é divisivel por 3');
assert.strictEqual(myFizzBuzz(10), 'buzz', 'o número não é divisível po 5');
assert.strictEqual(myFizzBuzz(11), 11, 'o número retornado não é o mesmo do inserido');
console.log(myFizzBuzz(a));
