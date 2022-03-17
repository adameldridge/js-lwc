// 1. Array Destructuring
let arr = ["amazon", "google"];

// Manual approach
//let company1 = arr[0];
//let company2 = arr[2];

// Shorthand approach
let [company1, company2] = arr;
console.log(company1);
console.log(company2);

// 2. Object Destructuring
let options = {
    title: "Zero to Hero",
    age: 23,
    type: "CRM"
}

// Manual approach
// let title = options.title;
// let age = options.age;

// Shorthand approach
let{title, age, type} = options;
console.log(title);
console.log(age);
console.log(type);
