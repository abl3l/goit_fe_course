let deliveryCountry;
const shippingChina = 100;
const shippingSouthAmerica = 250;
const shippingAustralia = 170;
const shippingIndia = 80;
const shippingJamaica = 120;

 deliveryCountry = prompt('Enter delivery country'||"");
if (!deliveryCountry)
{console.log('Canceled by user!');}
    else (deliveryCountry = deliveryCountry.toLowerCase());{
switch(deliveryCountry){
    case "china":
        console.log(`Shipment to ${deliveryCountry} will cost ${shippingChina} credits`);
        break;
    case "south america":
        console.log(`Shipment to ${deliveryCountry} will cost ${shippingSouthAmerica} credits`);
        break;
    case "australia":
        console.log(`Shipment to ${deliveryCountry} will cost ${shippingAustralia} credits`);
        break;
    case "india":
        console.log(`Shipment to ${deliveryCountry} will cost ${shippingIndia} credits`);
        break;
    case "jamaica":
        console.log(`Shipment to ${deliveryCountry} will cost ${shippingJamaica} credits`);
        break;
        default:
        console.log('Delivery is not available in your country.');
        }
    }