console.log("hello")

//Object.assign -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//Not work: IE11
let obj = { a: "mike" };
let copy = Object.assign({}, obj);
console.log(copy); // { a: "mike" }

//Array.value -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
//Not work: IE11, Chrome
// let a = ['w', 'y', 'k', 'o', 'p']; 
// let iterator = a.values();
// console.log(iterator.next().value); // w 
// console.log(iterator.next().value); // y 
// console.log(iterator.next().value); // k 
// console.log(iterator.next().value); // o 
// console.log(iterator.next().value); // p


//Arrow Function -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// let writeLine = (a) => console.log(a)
// writeLine("hello ");


//********* The issues with Global Polyfills
// console.log("Hello Everyone")

// setInterval(function () {
//     console.log = function () { return 2 + 2 };
// }, 10000);
