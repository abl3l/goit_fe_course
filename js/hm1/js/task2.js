const credits = 23580;
const pricePerDroid = 3000;
let totalPrice;
let amount;

amount = prompt('How many droids do you want to buy?'||"");
amount = Number(amount);
if (!amount){
    console.log('Canceled by user!');
}else {
    totalPrice=pricePerDroid *amount;
    if (totalPrice > credits){
        console.log('Insufficient funds in the account!');
    }
    else{
        console.log(`You have bought ${amount} droids, there are ${credits - totalPrice} credits left on your account.`);
    }
}