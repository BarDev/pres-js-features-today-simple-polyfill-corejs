console.log("hello")

//Object.assign -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Object/assign
//Not work: IE11
let obj = { a: "mike" };
let copy = Object.assign({}, obj);
console.log(copy); // { a: "mike" }

//Array.value -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/Array/values
//Not work: IE11, Chrome
//!!! Does not work with babel-runtime & transform-runtime
// let a = ['w', 'y', 'k', 'o', 'p']; 
// let iterator = a.values();
// console.log(iterator.next().value); // w 
// console.log(iterator.next().value); // y 
// console.log(iterator.next().value); // k 
// console.log(iterator.next().value); // o 
// console.log(iterator.next().value); // p


//Arrow Function -- ES6/ES2015 -- https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Functions/Arrow_functions
// let writeLine = (a) => console.log(a)
// writeLine("hello from arrow function");


//********* The issues with Global Polyfills
// console.log("Hello Everyone")

// setInterval(function () {
//     console.log = function () { return 2 + 2 };
// }, 10000);


//class fields -- https://github.com/tc39/proposal-class-fields

class Something  {
    title = "Welcome";
    name = "Mike";

    handleTitleChanged = (e) => {
        const newTitle = e.target.value;
        title = newTitle;
        render();
    }

    render() {
        //Simulate an user action
        console.log(this.title)
    }
}

var something = new Something();


something.render();
