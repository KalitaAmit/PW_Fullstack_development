
function fun () {
    var i = 5;
    while(i < 10) {
        var x = i;
        i++;
    }
    console.log(x);
}
fun();



let i = 1;
console.log(y);  //  no error but show undefined because no value allocated before for y
while(i < 5) {
    var y = 10;
    i++;
}
console.log(y);

