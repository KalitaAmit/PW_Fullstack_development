/* 
fun is a hOF(higher order function) because it takes fn(which is a function) as argument
*/

function fun(x, fn) {
    for(let i = 0; i < x; i++) {
        console.log(i);
    }
    fn();
}

fun(10, function exec() {
    console.log("I am executed also");
})

//  function exec() {
// console.log("I am executed also");
// }

//  above this is getting consumed on fn so fn is a callback function 
