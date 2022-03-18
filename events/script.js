// Events

// programatically add an event listener 
document.addEventListener('mousemove', handler);

// function for handling the event
function handler(){
    document.querySelector('.demo').innerHTML = Math.random();
}

// programatically remove an event listener
function removeHandler(){
    document.removeEventListener("mousemove", handler);
}

// Create custom event
function callCustomMethod(){
    let event = new CustomEvent("hello", {
        detail:{name: "adam"}
    })
    document.dispatchEvent(event);
}

// add add event listener for custom event
document.addEventListener("hello", function(data){
    console.log("hello has called and sent", data.detail);
})