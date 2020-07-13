let valor = 0;
let resultado = " ";

if(valor > 0){
    resultado = `positive  valor = ${valor}` ;
}else if( valor < 0){
    resultado = `negative valor = ${valor}`;
}else{
    resultado = `o valor é zero! = ${valor}` ;
}

console.log(resultado);