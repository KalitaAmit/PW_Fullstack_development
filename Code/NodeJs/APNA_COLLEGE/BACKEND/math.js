const sum = (a, b) => a + b;
const mul = (a, b) => a * b;
const g = 9.8;
const PI = 3.14;


// module.exports = 123;

//  exporting all things by creating object
let obj = {
    sum: sum,  //  value of sum will be exported
    mul: mul,  //  value of null will be exported
    g: g,  //  //  value of g will be exported 
    PI: PI  //  //  value of PI will be exported
};

module.exports = obj;