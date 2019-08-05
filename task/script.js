'use strict'

// function min(a,b){
//     if ( a > b){
//      return a;
//     }
//     else{
//      return b;
//     }
// }
// let a = +prompt("a?" || '');
// let b = +prompt("b?" || '');

// alert( min(a,b) );

// function pow(x, n) {
//     let result = x;  
//     for (let i = 1; i < n; i++) {
//       result = Math.pow(x,n);
//     }
//     return result;
//   }
  
//   let x = prompt("x?", '');
//   let n = prompt("n?", '');
  
//   if (n <= 1) {
//     alert('Попробуйте снова'
//     );
//   } else {
//     alert( pow(x, n) );
//   }

// function sumTo(n){
//     let sumTo = 0;
//     for (let i = 1; i < n; i++){
//         sumTo += i; 
//     }
//     return sumTo;
// }
// alert( sumTo(100) );

// function sumTo(n){
//     if( n == 1){
//         return n;
//     }
//     else return n + sumTo(n - 1);
// }
// alert( sumTo(107) );


// const user = {
//     name: 'Ajax',
//     email: 'ajax@gmail.com',
//     age: 10,
// }
// console.log(user)  

// const getProbByKey = (obj,key) => obj[key]

// console.log(getProbByKey(user,'age'));

// const getUserEmail = (obj) => obj.email;
// console.log(getUserEmail(user));

// const key = 'name';
// const name = 'Mishko';
// const getKey = () => 'age';
// const Number = ['52','54','53'];

// const user = {
//     email: 'ajax@gmail.com',
//     [key]:name,
//     [getKey()]: 28,
//     [Number[1]]: 54,
// };


// console.log(user);

/*const dog = {
    name: 'Polly',
    age: 3,
    wants: 'Cracer',
    mood: 'happy',
    makeSound() {
        console.log('woof');
    },
    changeAge(newAge){
        dog.age = newAge;
    },
}
dog.makeSound();
console.log(dog);
dog.changeAge(7);
console.log(dog);
*/
/*
const user = {
    name: "Mango",
    age: 20,
    hobby: "html",
    premium: true

  };
  user.mood = 'happy'
  user.hobby = 'js'
  user.premium = false;
  for (let user[key] of user){
      console.log(user[key])
  
}
  console.log(user)*/
 const obj = {
    a: 1,
    b: 2,
    c: 4,
  }
  const isObjectEmpty = (obj) => (Object.keys(obj).length == 0);
//   function isObjectEmpty(obj) {
//     for (let key in obj) {
//         if (obj.hasOwnProperty(key)) {
//             return false;
//         }
//     }
//     return true;
// }
 console.log(isObjectEmpty({})); // true
 
 console.log(
   isObjectEmpty({a: 1})
 ); // false
 
 console.log(
   isObjectEmpty({a: 1, b: 2})
 ); // false