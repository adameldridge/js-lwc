// Arrow Function

// normal function
function sum(data){
    let sum = data +10;
    return sum;
}
sum();

// do not need curly brackets if no operations before return
const func1 = ()=>console.log("hello");
func1();

// do need curly brackets if operations before return
// do not need brackets around paramter if only one
const func2 =data=>{
    let sum = data+10;
    return sum;
}
console.log(func2(5));

// do need brackets around parameter if more than one
const func3 =(data1,data2)=>{
    let sum = data1+data2+10;
    return sum;
}
console.log(func3(5,5));

// traditional functions lose context of 'this'
let obj ={
    firstName:"adam",
    getName:function(){
        console.log(this.firstName);
        function fullName(){
            console.log("my full name is "+ this.firstName + " eldridge");
        }
        fullName();
    }
}
obj.getName();

// arrow function binds to the current context and remembers what 'this' refers to
let obj2 ={
    firstName:"adam",
    getName:function(){
        console.log(this.firstName);
        const fullName =()=>{
            console.log("my full name is "+ this.firstName + " eldridge");
        }
        fullName();
    }
}
obj2.getName();



