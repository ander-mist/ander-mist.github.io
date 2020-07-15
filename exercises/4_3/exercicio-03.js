
let numeroAsterisco = 5;
let index2=numeroAsterisco-1;
    for(let index = 0; index < numeroAsterisco; index += 1){
        let letra = "";
        for(let j = 0; j < numeroAsterisco;j += 1){
            if(j<index2){
                letra+=" ";
            }else{
                letra+="*";
            }    
        }
        index2 = index2-1;
        console.log(letra);
     }
 