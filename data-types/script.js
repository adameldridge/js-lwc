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
//  - no float or in, everything is number
let numberVar = 10.66;
console.log(typeof numberVar);

// 2. string
let stringVar = "adam";
console.log(typeof stringVar);

// 3. boolean
let boolVar = false;
console.log(typeof boolVar);

// 4. bigInt
//  - brought into deal with large numbers that number cannot handle
let bigIntVar = 100n;
console.log(typeof bigIntVar);

// 5. undefined
//  - set when an object value hasn't been set
//  - should not be used explicitly, use null instead
//  - 'undefined == null' is true but 'undefined === null' is false
console.log(typeof undefVar);

// 6. null
//  - prints as object but should be null, due to error in JS that can't be fixed
//  - must be set explicitly
//  - should be used instead of undefined
let nullVar = null;
console.log(typeof nullVar);

// 7. object 
//  - base for many objects
let objVar = {};
console.log(typeof objVar);

// 8. Symbol
// - Used for unique identifiers
// - Not used in LWC
let symVar = Symbol("id");
console.log(typeof symVar);

// Other constructs - just objects
//  - String (not string)
//  - Array
let strObjVar = new String("hey");
console.log(typeof strObjVar);

let arrVar = ["Cheese", "Milk", "Eggs"];
console.log(typeof arrVar);

