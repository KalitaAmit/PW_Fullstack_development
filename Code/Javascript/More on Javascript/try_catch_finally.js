function isEvenOrOdd(x) {
    try {
        if(x % 2 == 0) {
            console.log("Even");
        } else {
            console.lo("odd");
        }
        console.log("ending");
    } catch {
        console.log("handled");
    } finally {
        console.log("finally");
    }
}

isEvenOrOdd(10);  //  output - Even ending finally
isEvenOrOdd(11);  //  output - ending finally