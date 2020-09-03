const API_URL = 'https://icanhazdadjoke.com/';
const myObject = {
    method: 'GET',
    headers: { 'Accept': 'application/json' }
  };

const fetchJoke = () => {
  // Adicionar lógica aqui!
  fetch(API_URL, myObject)
  .then(message => message.json())
  .then(data => {
    const tag = document.createElement('p');
    tag.innerHTML = data.joke;
    document.querySelector('#jokeContainer').appendChild(tag)
  });
};

  const promessa = new Promise((resolve, reject) => {
    let numbers = Math.floor( Math.random() * 50);
    let randomNumbers = [];
    for (let index = 0; index < 10; index += 1) {
      randomNumbers.push(numbers * numbers);
    }
    
    const resultRandomNumbers = randomNumbers.reduce((acc, curr) => acc + curr);

    const dividerNumbers = [2,3,5,10];
    const resultNumbers = [];

    dividerNumbers.forEach(number => resultNumbers.push(resultRandomNumbers / number));
    resultNumbers.forEach((number) => 
    console.log(`o resultado ${resultNumbers} por ${dividerNumbers[number]} é: ${resultNumbers[number]}`));
  


    if(resultRandomNumbers >= 8000) {
      return reject(console.log(`o numero ${resultRandomNumbers} excedeu o limite de 8000`))
    }

    resolve(console.log(`o numero ${resultRandomNumbers} está dentro do limite de 8000`))

  }).then((msg => msg)).catch((msg => msg));
  



window.onload = () => {
  fetchJoke();
}

// const fetch = require('node-fetch');

// function verifiedFetch(url) {
//   return new Promise((resolve, reject) => {
//     if (url === 'https://api.chucknorris.io/jokes/random?category=dev') {
//       fetch(url)
//         .then((r) => r.json())
//         .then((r) => resolve(r.value));
//     } else {
//       reject(new Error('endpoint não existe'));
//     }
//   });
// }

// const promise = new Promise((resolve, reject) => {
//   const number = Math.floor(Math.random() * 11);

//   if (number > 10 || number <= 5) {
//     return reject(console.log(`Que fracasso =( Nosso número foi ${number}`));
//   }
//   resolve(console.log(`Que sucesso =) nosso número foi ${number}`));
// });

