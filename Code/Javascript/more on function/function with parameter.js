function calculatesquare(x) {  // x is parameter
    return x * x;
}

console.log(calculatesquare(10));  //   this is argument 



//case - 1
// value of parameter is used, beacause of no argument is passed
function calculatesquare(x = 2) {  // x is parameter
    return x * x;
}

console.log(calculatesquare());  //   this is argument 




// case - 2   
// value of parameter is overrdide by argument value
function calculatesquare(x = 2) {  // x is parameter
    return x * x;
}

console.log(calculatesquare(10));  //   this is argument 





//  passing more than one parameter

function multiply(x, y) {
    return x * y;
}

console.log(multiply(9, 89));



//  passing array as parameter

function addElement([num1, num2, num3]) {
    //  [num1, num2, num3] is a array
    return num1 + num2 + num3;
}
let arr = [1, 2, 9]
console.log(addElement(arr));



//  In the below case out will be nan because 9 is assigned to x and y remain undefined. so 9 + undefined = nan

function add(x = 1, y,) {
    return x + y;
}

console.log(add(9));


//  function with multiple number of parameter

function sumOfAllParameter() {
    let sum = 0;
    for(let i = 0; i < arguments.length; i++) {
        sum += arguments[i];
    }
    return sum;
}





console.log(sumOfAllParameter(1, 2, 3, 4, 5));