function fun() {
    for (let i = 0; i < 10; i++) {

    }
    console.log(i);  // i can be access outseide for loop because we have use var
}

function process(x, y) {
    if(x > y) {
        //  var temp = x;
        // if a variable is not used outside a block then we should use let
    let temp = x;
    x = y;
    y = temp;
    }
}
return y - x

fun();




// redeclaration of variable is allowed in case of var
var x = 9;
var x = 10;


//  redeclaration of variable is not allowed in case of let
//let x = 9;
//let x = 10;

