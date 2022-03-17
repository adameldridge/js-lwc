// String Methods

let str = "Hello guys I hope you are doing good";

// 1. includes()
//  - determines whether a string contains specified value
let check = str.includes("hope");
console.log(check);

// 2. indexOf()
//  - returns position of first occurence of a specified value in a string
//  - returns -1 if not present
let index = str.indexOf("doing");
console.log(index);

// 3. startsWith()
//  - determines whether a string starts with specified value
let startCheck = str.startsWith("Hello");
console.log(startCheck);

// 4. slice()
//  - returns extracted part of string as a new string
let newStr = str.slice(0, 5);
console.log(newStr);

// 5. toLowerCase()
//  - converts string to lower case
let mixedCase1 = "My name is ADAM";
let lowerCase = mixedCase1.toLowerCase();
console.log(lowerCase);

// 6. toUpperCase()
//  - converts string to upper case
let mixedCase2 = "My name is ADAM";
let upperCase = mixedCase2.toUpperCase();
console.log(upperCase);

// 7. trim()
//  - removes leading and trailing whitespace
let searchText = "     salesforce lwc";
let trimmedText = searchText.trim();
console.log(trimmedText);