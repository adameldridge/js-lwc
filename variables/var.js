/***********************************************/
/*****************var keyword*******************/
/***********************************************/

// can be updated 
var var1 = "zero to hero";
console.log(var1);

// can be re-declared
var var1 ="zero to hero in lwc";
console.log(var1);

// supports global scope
var var2 = "zero to hero";
console.log(window.var2);

// supports function scope
function abc(){
    var var3 = "hero in lwc";
    console.log(var3);
}
abc();

//console.log(var3); // error

// Does not support block scope, 
// - binds to global (window) scope
if(2==2){
    var var4 = 10; 
}

console.log(window.var4); // success