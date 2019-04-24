const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let amount;

amount = prompt('How many droids do you want to buy?');
if (amount === null,' ',"0")
{console.log('Canceled by user!');}
else {totalPrice=pricePerDroid *(amount);
    if (totalPrice > credits){
        console.log('Insufficient funds in the account!');
    }//else if (totalPrice = NaN){
        //console.log('Insufficient funds in the account!');} 
    else{
        console.log('You have bought ${amount}droids,there are${credits - totalPrice} credits left in your account');
    }
}