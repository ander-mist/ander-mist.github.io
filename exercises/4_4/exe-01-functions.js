

// function validarPalindromo(palavra){
//     let inversa = "";
//     for(index = palavra.length-1; index >= 0; index -= 1){
//         inversa += palavra[index];
//     }
//     if(inversa == palavra){
//         return true + " = "+ palavra +" /"+ inversa;
//     }else{
//         return false + " != " + palavra +" /"+ inversa;
//     }
    
// }

// console.log(validarPalindromo("radar"));


function verificaPalindrome(palavra) {
    let arrayLetras = palavra.split("");
    let isPalindrome = true;
    for (let index in arrayLetras) {
      if (arrayLetras[index] != palavra[(palavra.length - 1) - index]) {
        isPalindrome = false;
      }
    }
    return isPalindrome;
  }

  console.log(verificaPalindrome('arara')); //true
console.log(verificaPalindrome('caramujo'));