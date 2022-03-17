// Array Methods

/*
Syntax for array methods:
arr.methodName(function(currentItem, index, actualArray){
    // action
})
*/

// 1. map()
// - loop over array and return new array based on the value
let arr1 = [2,3,5,7,9,10];
let mapArray = arr1.map(function(currentItem, index, array){
    console.log(`currentItem is ${currentItem} index ${index}, array ${array}`);
    return currentItem*2;
})
console.log(mapArray);


// 2. every()
//  - return true or false if every element in the array satisfies the condition
let arr2 = [32, 33, 18, 40];
let isAllAdult = arr2.every(function(currentItem){
    return currentItem > 18;
})
console.log(isAllAdult);


// 3. filter()
//  - return new array with all the elements the satisfy the condition
let arr3 = [2,3,5,7,9,10];
let filteredValues = arr3.filter(function(currentItem){
    return currentItem >5;
})
console.log(filteredValues);


// 4. some()
//  - return true if at least one element in the array satifisfies the condition
let arr4 = [32, 33, 18, 40];
let someOver32 = arr4.some(function(currentItem){
    return currentItem > 32;
})
console.log(someOver32);


// 5. sort()
//  - sort the elements of an array

// sort strings
let arr5 = ["nikhil", "john", "adam"];
console.log(arr5.sort())

// sort numbers
let arr6 = [10,39,12,80,54];
let sortedValues = arr6.sort(function(a,b){
    return a-b;
})
console.log(sortedValues);


// 6. reduce()
//  - reduces the array to a single value (left to right)
let arr7 = [12,78,30];
let sum = arr7.reduce(function(total, currentItem){
    return total+currentItem;
},0)
console.log(sum);


// 7. forEach()
//  - loops through each element of an array
let arr8 = [12,78,30];
arr8.forEach(function(currentItem){
    console.log(currentItem);
})
