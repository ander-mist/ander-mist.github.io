//1- Para o primeiro exercício de hoje, faça um programa que, dado um valor n qualquer, seja n > 1, imprima na tela um quadrado feito de asteriscos de lado de tamanho n. Por exemplo:

let numeroAsterisco = 7;


if(numeroAsterisco > 1){
   for(let index = 0; index < numeroAsterisco; index += 1){
    let letra = " ";
    for(let index2 = 0; index2 < numeroAsterisco; index2 += 1){
        letra += "*";
        }
        console.log(letra);
    }
 
}
