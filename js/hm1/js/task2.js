const credits = 23580;
const pricePerDroid = 3000;
let totalPrice = Number;
let amount = Number;

(amount) = prompt('How many droids do you want to buy?');
if (!amount){console.log('Canceled by user!');}
else {(totalPrice) = pricePerDroid * amount;
    if (totalPrice > credits){
        console.log('Insufficient funds in the account!');
    }else{
        console.log('You bought ${amount}droids,${credits - totalPrice} credits left in your account');
    }
}