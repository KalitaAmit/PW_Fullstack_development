function fun(fn) {
    console.log("welcome to fun");
    fn();
}

fun(function() {
    console.log("how much fun");
})