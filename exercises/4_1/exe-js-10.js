let custoProduto = 10;
let valorVenda = 20;
let lucro= 0.0; 

if(custoProduto <= 0 || valorVenda <= 0){
    console.log("adicione valores válidos");
}else{
    lucro = (valorVenda - (custoProduto + (custoProduto * 0.2))) *1000;
    console.log("O lucro da venda é de: R$" + lucro); 
}