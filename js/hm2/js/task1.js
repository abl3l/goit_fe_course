let input;
const numbers = [];
let total = 0;

do{
    input = prompt("Введите число");
    if(!input){
        break;
    }else if(isNaN(input)) {
        alert("Было введено не число, попробуйте еще раз");
    }else{
        input = Number(input);
        numbers.push(input);
    }    
}while(input !== null);
if(numbers.length){
    for(const value of numbers){
        total += value;
    }
    console.log(`Общая сумма чисел равна ${total}`);
}