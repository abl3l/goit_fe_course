const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let amount;

amount = prompt('How many droids do you want to buy?');
if (!amount)
{console.log('Canceled by user!');}
else if (amount === String)
{console.log('Canceled by user!');}
else {totalPrice=pricePerDroid * Math.round(amount);
    if (totalPrice <= 0){
        console.log('Insufficient funds in the account!');
    }else if (totalPrice > credits){
        console.log('Insufficient funds in the account!');
    }//else if (totalPrice = NaN){
        //console.log('Insufficient funds in the account!');} 
    else{
        console.log('You have bought ${amount}droids,there are${credits - totalPrice} credits left in your account');
    }
}