// Spread Operator

// 1. Expand string into array
let greeting = "Hello";
let charList = [...greeting];
console.log(charList);

// 2. Combine arrays
let arr1 = ["amazon", "google"];
let arr2 = ["facebook", "instagram"];
let arr3 = [...arr1, ...arr2];
console.log(arr3);

// 3. Add value to an array
let arr4 = ["a", "b", "c"];
let arr5 = [...arr4, "adam"];
console.log(arr5);

// 4. Combining an object
//  - right side takes precedent and will overwrite matching attributes
let obj1 = {name: "salesforce", age:23, date:"23/10/2022"};
let obj2 = {name: "facebook", age:55, height:120};
let obj3 = {...obj1, ...obj2};
console.log(obj3);

// 5. Shallow Copy

// Direct copy of array keeps the reference, so original array is updated
let arr10 = ["x", "y", "z"];
let arr11 = arr10;
arr11.push("adam");
console.log(arr10);
console.log(arr11);

// Shallow copy breaks the reference
let arr12 = ["x", "y", "z"];
let arr13 = [...arr12];
arr13.push("adam");
console.log(arr12);
console.log(arr13);

// 6. Nested Copy 

// When there is more than one level reference is not broken
// Only works for single level data structure
let arrObj =[
    {name: "adam"},
    {name: "salesforce"}
]
let arrObj1 = [...arrObj];
arrObj1[0].name="superman";
console.log(arrObj1);
console.log(arrObj);

// Hack for getting around this issue is to turn into JSON and then back into object
let arrObj2 =[
    {name: "adam"},
    {name: "salesforce"}
]

let arrObj3 = JSON.parse(JSON.stringify(arrObj2));
arrObj3[0].name="superman";
console.log(arrObj2);
console.log(arrObj3);