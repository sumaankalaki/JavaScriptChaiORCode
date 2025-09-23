"use strict"; // treart all the Js code as newe version
// alert(3 + 3) // we are using node.js, not browser

console.log(3 + 3); // code readability
console.log("suman");


//https://262.ecma-international.org/

let name = "suman"; // string literal
let age = 21;
let isLoggedIn = false

// numbrt  = ? 2 ot power 53
//bigint
//string =>"
// boolean => true/false
// null => standalone value [ empty value]
// undefined => variable value not assigned
// symbol => unique value
//object => key value pairs

console.log(typeof name);
console.log(typeof age);
console.log(typeof isLoggedIn);
console.log(typeof null); // bug in js
console.log(typeof undefined);
console.log(typeof 123n); //bigint
console.log(typeof Symbol("id"));
console.log(typeof { name: "suman", age: 21 });
