const f = function fun() {
    console.log("how much fun???");
}

f();
fun();  //  can not access fun() without f. scope of fun() is alloacated to f