/***********************************************/
/*****************const keyword*******************/
/***********************************************/

// Can't be updated 
const const1 = "zero to hero";
console.log(const1);
//const1 = "lwc"; //error

// Cannot be re-declared
//const const1 = "hello"; //error

// Supports global scope but not in window
let const2 = "adam is great";
console.log(window.const2);

// Supports function scope
function abc(){
    const const3 = "adam";
    console.log(const3);
}
abc();
//console.log(const3); //error

// Supports block level scope
if(2==2){
    let const4 = "salesforce";
    console.log(const4);
}
//console.log(const4); //error
