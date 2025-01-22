var teacher = "snaket";  //  present in golbal scope
function fun() {  //  present in global scope
    console.log(teacher);  // throws an error
    console.log(content);
    var teacher = "pulkit";  //  present in the scope of fun()
    let content = "javacript";  //  present in the scope of fun() . content will be access only after declaration 
    if (content == "javascript") {
        let hours = "120+";
        console.log(hours);
    }
    console.log(teacher, content);
}

fun();
console.log(teacher);
// console.log(content);