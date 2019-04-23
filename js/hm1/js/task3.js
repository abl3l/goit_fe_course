let deliveryCountry;
const shippingChina = 100;
const shippingSouthAmerica = 250;
const shippingAustralia = 170;
const shippingIndia = 80;
const shippingJamaica = 120;

deliveryCountry = prompt('Enter delivery country');
if (!deliveryCountry){console.log('Canceled by user!');}
switch(deliveryCountry)//.toLowerCase()
{
    case 'China':
    console.log('Shipping to ${deliveryCountry} will cost ${shippingChina} credits');
    break;
    
    case 'SouthAmerica':
    console.log('Shipping to ${deliveryCountry} will cost ${shippingSouthAmerica} credits');
    break;
    
    case 'Australia':
    console.log('Shipping to ${deliveryCountry} will cost ${shippingAustralia} credits');
    break;
    
    case 'India':
    console.log('Shipping to ${deliveryCountry} will cost ${shippingIndia} credits');
    break;
    
    case 'Jamaica':
    console.log('Shipping to ${deliveryCountry} will cost ${shippingJamaica} credits');
    break;

    default:
    console.log('Delivery is not available in your country.');
    break;
}

