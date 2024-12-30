function fun() {  //  fun() -> global scope
    var x = 10;  //  x -> func scope
    function gun() {  //  gun() -> fun scope
        var y = 20;  //  y -> gun scope
        console.log(x);  //  10
        console.log(y);  //  20
    }
    console.log(x);  // print - 10
    console.log(y);  //  error
}

fun();