let valor1 = 2000;
let valor2 = 500;
let valor3 = 10000;
let resultado = 0;

if (valor1 > valor2 && valor1 > valor3){
    resultado = valor1;
}else if(valor2 > valor3){
    resultado = valor2;
}else{
    resultado = valor3;
}

console.log(resultado);