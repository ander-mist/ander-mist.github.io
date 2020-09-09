// Crie uma função que gere um número aleatório entre 0 e 100. Você irá criar também os testes para essa função. Utilizando o mock, defina o retorno padrão como 10. Teste se a função foi chamada, qual seu retorno e quantas vezes foi chamada.
const modeNode = require('node-fetch');
const tip = require('./exe01-10-3');

describe('retornando valores da função newRandomNumbers',() => {
	beforeEach(() => {
		tip.newRandomNumbers = jest.fn();
	});

	it('o retorno deve retornar 10', () => {
		tip.newRandomNumbers.mockReturnValue(10);
		expect(tip.newRandomNumbers()).toBe(10);	
	});

	it('função deve ser chamada', () => {
		tip.newRandomNumbers();
		expect(tip.newRandomNumbers).toHaveBeenCalled();
	})

	it('função deve ser chamada 5 vezes', () => {
		tip.newRandomNumbers();
		tip.newRandomNumbers();
		tip.newRandomNumbers();
		tip.newRandomNumbers();
		tip.newRandomNumbers();
		expect(tip.newRandomNumbers).toHaveBeenCalledTimes(5);
	})
})