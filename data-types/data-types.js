/*
8 basic data types in JavaScript:
 1. number
 2. string
 3. boolean
 4. bigInt
 5. undefined
 6. null
 7. object
 8. Symbol

everything else is an Object in some form
*/

// 1. number
let numberVar = 10.66;
console.log(typeof numberVar);

// 2. string
let stringVar = "adam";
console.log(typeof stringVar);

// 3. boolean
let boolVar = false;
console.log(typeof boolVar);

// 4. bigInt
let bigIntVar = 100n;
console.log(typeof bigIntVar);

// 5. undefined
console.log(typeof undefVar);

// 6. null
//  - prints as object but should be null, due to error in JS that can't be fixed
let nullVar = null;
console.log(typeof nullVar);

// 7. object 
let objVar = {};
console.log(typeof objVar);

// 8. Symbol
let symVar = Symbol("id");
console.log(typeof symVar);

// Other constructs - just objects
//  - String (not string)
//  - Array
let strObjVar = new String("hey");
console.log(typeof strObjVar);

let arrVar = ["Cheese", "Milk", "Eggs"];
console.log(typeof arrVar);

