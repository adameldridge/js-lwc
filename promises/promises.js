// Promises
/*
3 states:
    - pending
    - fulfilled
    - rejected
*/

// format of promises
function checkIsSuccess(data){
    return new Promise(function(resolve, reject){
        if (data === "success"){
            return resolve("successfully executed");
        }else{
            return reject("unsuccessfully executed");
        }
    })
}

checkIsSuccess("success").then(function(result){
    console.log(result);
}).catch(function(error){
    console.error(error);
})


// Retrieve data from URL
fetch('https://api.github.com/users/adameldridge').then(function(result){
    return result.json();
}).then(function(response){
    console.log(response)
})