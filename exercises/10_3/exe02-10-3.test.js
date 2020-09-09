// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

const avatar = require('./exe02-10-3');

describe('Mockando a função newRandomNumbers', () => {
	it('criando uma nova implementação', () => {
		avatar.newRandomNumbers = jest.fn();
		function division (a, b) {
			const newDividedNumber = a / b;
			return newDividedNumber;
		}

		avatar.newRandomNumbers(division(10,5));
	})
})