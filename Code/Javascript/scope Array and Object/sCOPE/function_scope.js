function fun () {
    console.log(y);  //  y is accessible here
    var y = 10;  //  not accesible outside
}
console.log(y);

function gun() {
    console.log(z);  // not accessible here
    let z = 10;
}



