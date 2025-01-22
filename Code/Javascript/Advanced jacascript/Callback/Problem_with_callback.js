/*
1. readibility problem - code is very disorganised to read
2. Inversion of control
*/

let arr = [1, 10, 1000, 9, 2, 3, 11];

arr.sort(function cmp(a, b) {
    return a - b;
})

console.log(arr);




//  team A
function doTask(fn, x) {
    //  whole imnplementation is done by team A
    fn(x * x);  //  calling the callback with square of x
}


//  team B 
//  use the function doTask
doTask(function (num) {
    console.log("Woah num is", num);
}, 9);