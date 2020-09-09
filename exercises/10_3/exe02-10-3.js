// Com a mesma função do exercício anterior, utilizando o mock, crie uma nova implementação, que deve receber dois parâmetros e retornar a divisão do primeiro pelo segundo. Essa implementação deve ocorrer uma única vez. Faça os testes necessários.

function newRandomNumbers () {
    const randomNumber = Math.floor(Math.random() * 100);
    return randomNumber;
}

module.exports = {newRandomNumbers};