// Object/JSON Operations

let obj = {
    name: "salesforce",
    age: 23,
    dob: "23/10/1990"
}

//Object.keys()
//  - returns all keys of an object as an array
console.log(Object.keys(obj));

//Object.values()
//  - returns all values of an object as an array
console.log(Object.values(obj));

// JSON.stringify()
//  - converts object to string
let str = JSON.stringify(obj);
console.log(str);

// JSON.parse()
//  - converts JSON string to object
console.log(JSON.parse(str));