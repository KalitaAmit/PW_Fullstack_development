function myFirstFunction() {
    console.log("This is");
    console.log("my first function")
    return; //  this will return undefined
}

function mysecondFunction() {
    return "This is my second function"
}

myFirstFunction();


let b = mysecondFunction();
console.log(b);