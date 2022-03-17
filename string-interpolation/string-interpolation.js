// String Interpolation

// Old way of joining
let firstName = "Adam";
let age = 33;
let str = "My name is "+firstName+" and my age is "+age;
console.log(str);

// Causes an issue as numbers can be treated as strings
let a = 2;
let b = 3;
let str1 = "The sum of "+ a +" and "+ b +" is "+a+b;
console.log(str1);

// String interpolation fixes this
let x = 10;
let y = 20;
console.log(`The sum of ${x} and ${y} is ${x+y}`);

//useful for constructing URLs
let recordId = "123456";
console.log(`http://salesforce.com/${recordId}`);