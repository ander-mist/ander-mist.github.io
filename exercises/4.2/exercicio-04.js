//Com o mesmo código do exercício anterior, caso valor final seja maior que 20, imprima a mensagem: "valor maior que 20". Caso não seja, imprima a mensagem: "valor menor ou igual a 20";

let numbers = [5, 9, 3, 19, 70, 8, 100, 2, 35, 27];
let soma = 0;
let media = 0.0;

for(let i = 0; i < numbers.length; i += 1){
    soma += numbers[i];
}

media = soma / numbers.length;
if(media > 20){
    console.log("valor maior que 20:-> " + media);

}else{
    console.log("valor menor ou igual a 20:-> " + media);
}


