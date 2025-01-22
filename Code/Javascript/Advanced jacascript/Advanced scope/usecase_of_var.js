function fun(x) {
    let i;  //  var i;   -> both works same here in this case
    if (x % 2 == 0) {
        i = 0;
    } else {
        i = 1;
    }
    console.log(x);
}
fun(10);



function gun(x) {
    if (x % 2 == 0) {
        var i = 0;  //  var is available / can be access outside if block
    } else {
        var i = 1;
    }
    console.log(i);
}

gun(99);