//Primitive
//7 types: Stirng, Number, Boolean, null, undefined, symbol, BigInt

const score = 100;
const scoreValue = 100.3
const isLoggedIn = false
const outsideTemp = null
let userEmail;
const id = Symbol('123')
const anotherId = Symbol('123')
console.log(id=== anotherId);
const bigNumber = 93874326789039876523678n

//Reference (Non primitive)
//Array, Objects, functions

const heros = ["shaktiaman", "naagral", "doga"]
let myObj = {
    name: "suma",
    age: 22,
}

const myfunction = function(){
console.log("Hello World");
}

console.log(typeof myfunction);
