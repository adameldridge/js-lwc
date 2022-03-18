// Set Timeout and Set Interval

// setTimeout()
//  - a method of the window object
//  - sets a timer and executes a callback function after timer expires

let timerId = window.setTimeout(function(){
    console.log("hello");
}, 2000)
console.log(timerId);

// stop timeout
//clearTimeout(timerId);


// setInterval()
//  - a method of the window object
//  - repeatedly calls a function with fixed delay between each call

let intervalId = window.setInterval(function(){
    console.log("hello");
}, 1000)

// stop interval
//clearInterval(intervalId);
