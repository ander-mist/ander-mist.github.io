let ang1=90, ang2=30, ang3=60;
let soma = ang1 + ang2 + ang3;

if (soma === 180){
    console.log("É um triangulo válido");
}else if(soma <= 0){
    console.log("dados inválidos");
}else{
    console.log("Não é um triângulo válido");
}