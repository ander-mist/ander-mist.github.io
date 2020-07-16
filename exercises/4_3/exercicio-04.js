//n = 5

//   *
//  ***
// *****
let numAsterisc = 5;
let letra = " ";
let coluna =0;
let linha =0;

for(let i =0;i < numAsterisc;i++){

    for(linha =0; linha <numAsterisc;j++){
        if(coluna === 0 && linha === numAsterisc/2-0.5){
            letra+="*";
        }else{
            
            letra+=" ";
        }

    } 
    coluna++;
    console.log(letra);
}





