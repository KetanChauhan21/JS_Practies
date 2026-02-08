// console.log(b)
// console.log(a)

// let a = "name";
// var b = 3

// var a = 4;
// function add(number) {
//   var addval = number + number;
//   function val(){
//     console.log(addval)
//   }
// }

// console.log(a);
// var first = add(2);
// var second = add(4);


// console.log(b)
// let a = 3
// var b = 100


// const arr = [11,2,3,1]

// const arr1 = arr.map((val)=>{
//   return val+1;
// })

// const arr2 = arr.filter((re)=>{
//   return re>5;
// })

// const arr3 = arr.reduce((curr, prev)=>{
//   return prev+curr;
// })

// console.log(typeof arr1)
// console.log(typeof arr2)
// console.log(typeof arr3)


// console.log(arr1)
// console.log(arr2)
// console.log(arr3)


// var c = 3;
// let k = 11;

// if(true){
//   console.log("sum")
//   let a = 43
//   var d = 1000
//   a++ 
//   console.log(a)
// }

// console.log(c)


// function a() {
//   var one = 900
//   function b() {
//     var two = 100;
//     function c() {
//       console.log(one,two)
//     }
//   }
// }

// a()

// function one(){
//   var a = 4;
//   function two(){
//     console.log(a);
//   }
//   return two;
// }


// var closer = one();

// closer()  


// function outer(){
//   var a = 43;
//   return function inner(){
//     console.log(a);
//   }
// }

// const value = outer()
// value()

// function outer() {
//   var e = 1000;
//   function inner() {
//     console.log(e)
//   }
//   return inner;
// }

// outer()()


// map, filter , reduce

// let arr = [3, 2, 1, 3, 1];

// let arr2 = arr.map((num) => num * 3);
// console.log(arr2)

// const newfilter = arr.filter((num) => num > 1);

// console.log(newfilter)

// // return single element
// let newreduce = arr.reduce((prev, curr) => curr = curr * prev)
// console.log(arr)
// console.log(newreduce)


// Function Declaration

// function a() {
//   console.log("a called");
// }


// Function Expression

// var b = function xyz() {
//   console.log(xyz);
// }

// Anonymous Function
// var x = function () {
//   console.log("anonymous");
// };


// named Function Expression

// var b = function xyz() { console.log("good kapil") }


/*
In JavaScript, functions are first-class citizens because they can be assigned to variables, 
passed as arguments, returned from functions, and stored in data structures.
 */

// function call(params) {
//   for (let i = 0; i < 6; i++) {
//     function close(x) {
//       setTimeout(() => {
//         console.log(x);
//       }, x * 1000)
//     }
//     close(i)
//   }
//   console.log("value is")
// }

// call()


// setTimeout

setTimeout(()=>{

},1000)