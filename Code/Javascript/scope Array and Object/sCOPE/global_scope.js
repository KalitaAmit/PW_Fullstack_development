console.log(name);
var name = "Amit";  //  this name is a global scope variable
//  because it has been initialized outside any function or outside any block

let name = "Amit";  

function fun() {
    console.log(name);
    // strike throught in the name is not a issue

}
fun();
console.log(name);