//Ordene o array numbers em ordem crescente e imprima seus valores;

let numbers = [10,9,8,7,6,5,4,3,2,1];
let aux = 0;
let i;
let j;

for(i = 1; i < numbers.length; i += 1){
    
    for(j = 0; j < i; j += 1){
        if(numbers[j] > numbers[j + 1]){
            aux = numbers[j];
            numbers[j] = numbers[j + 1];
            numbers[j + 1] =  aux;
        }
    }

}
console.log(numbers);