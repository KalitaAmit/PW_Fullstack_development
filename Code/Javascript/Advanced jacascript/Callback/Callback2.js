setTimeout(function exec() {
    console.log("Running after someting")
}, 4000);


//  4000 menas 4000ms(4 sec) which refers after 4 second function exec() is going to run
//  setTimeout is a hOF. it takes a function exec() and 4000 as an argument. function exec() is a callback function
//  that is passsing inside setTimeout

