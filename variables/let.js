/***********************************************/
/*****************let keyword*******************/
/***********************************************/

// Can be updated 
let let1 = "zero to hero";
let1 = "zero to hero in lwc";
console.log(let1);

// Cannot be re-declared
//let let1 = "hello"; //error

// Supports global scope but not in window
let let2 = "adam is great";
console.log(window.let2);

// Supports function scope
function abc(){
    let let3 = "adam";
    console.log(let3);
}
abc();
//console.log(let3); //error

// Supports block level scope
if(2==2){
    let let4 = "salesforce";
    console.log(let4);
}
//console.log(let4); //error
