function myFirstFunction() {
    console.log("This is");
    console.log("my first function");
}



//  This function takes value x and tells wheather it is even or odd ?
function isEvenOrOdd(x) {
    // x is parameter
    if (x % 2 == 0) {
        console.log("even");
    } else {
        console.log("odd");
    }
}

// calling the function
myFirstFunction();


isEvenOrOdd(12);
// 12 is argument
isEvenOrOdd(19);



// define function with multple parameter

function addFourNumber(a, b, c, d) {
    let result = a + b + c + d;
    console.log(result);
}

// calling function with multiple argument

addFourNumber(10, 11, 12, 13);


// syntex with return keyword

function multiply(x , y) {
    let multiply = x * y;
    return multiply;
}
let i = multiply(10,12);
console.log(i);