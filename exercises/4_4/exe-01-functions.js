

function validarPalindromo(palavra){
    let inversa = "";
    for(index = palavra.length-1; index >= 0; index -= 1){
        inversa += palavra[index];
    }
    if(inversa == palavra){
        return true + " = "+ palavra +" /"+ inversa;
    }else{
        return false + " != " + palavra +" /"+ inversa;
    }
    
}

console.log(validarPalindromo("radar"));


// let a = "aba";
// let b = "aba";

// if(a == b){
//     console.log(true);
// }else{
//     console.log(false);
// }