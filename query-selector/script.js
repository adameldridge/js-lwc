// Query Single Element
let element = document.querySelector('.abc');
console.log(element.innerHTML);

// Query all elements
//  - returns a node list
let elementAll = document.querySelectorAll('div');
console.log(elementAll);

// Need to convert node list to array
Array.from(elementAll).forEach(function(item){
    return item.style.color="green";
})