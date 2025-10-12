// hosting

// console.log(a);

// greeding();
// console.log(greeding1)

// let a = 4;
// const b = "kapil";

// function greeding(params) {
//   console.log("Good Morning");
// }

// var greeding1 = () => {
//   console.log("good morning kapil");
// };

// Closure

// function outer() {
//   let counter = 0;
//   return function inner() {
//     return ++counter;
//   };
// }

// const count = outer();
// count();

// reverse string using the recursion
// let strval = "hello";

// function reverseString(str) {
//   if (str === "") {
//     return str;
//   } else {
//     return reverseString(str.substr(1)) + str.charAt(0);
//   }
// }

// let newone = reverseString(strval);
// console.log(newone);

// destructure

// const obj = {
//   name: "good",
//   id: 3,
// };

// const { name, id , city="INR"} = obj;

// console.log(city);

// const arr = [2,3,7]
// const [first,second] = arr
// console.log([first,second])

// swap val
// let a = 4;
// let b = 3;

// [c, d] = [b, a];

// console.log([c, d]);

// optional chaining

// const person = {
//   name:"good",
//   address:{
//     state:"Uttarpradesh",
//   }
// }

// const addressval = person.value?.state;
// const addressval1 = person.address?.state;

// console.log(addressval1)

// var vs let vs const

// if (true) {
//   const a = 3;
//   console.log(a);
// }

// console.log(a);

// prime number

// let a = 44;
// let count = 0;

// if (a <= 1) {
//   console.log("it is not a prime number");
// } else {
//   for (let i = 1; i <= a; i++) {
//     if (a % i == 0) {
//       count++;
//     }
//   }

//   if (count > 2) {
//     console.log("It is not a Prime Number");
//   } else {
//     console.log("It is a Prime number");
//   }
// }


