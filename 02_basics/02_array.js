const marvel_heros = ["thor", "Tornman", "spiderman"];
const dc = ["superman", "flash", "batman"];

// marvel_heros.push(dc);
// console.log(marvel_heros);
 // [ 'thor', 'Tornman', 'spiderman', [ 'superman', 'flash', 'batman' ] ]

//  console.log(marvel_heros[3][1]);
// const allHeros = marvel_heros.concat(dc);
// console.log(allHeros);

//Spread operator
// const all_new_Heros = [...marvel_heros, ...dc];
// console.log(all_new_Heros);


// //flat array
// const anotherArray = [1,2,3,4,5,[34,4,6],7,[3,4,45,[5,56]]];
// const myRealArray =  anotherArray.flat(Infinity);
// console.log(myRealArray);

// console.log(Array.isArray("suma")); // check its array or not
// console.log(Array.from("SUMAN")); // create array from string

console.log(Array.from({name:"suma"})); // intersting

let score1 = 100;
let score2 = 200;
let score3 = 300;

console.log(Array.of(score1,score2, score3)); // learn about of

