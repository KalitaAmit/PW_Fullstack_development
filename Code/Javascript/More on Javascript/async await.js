function returnDummyPromise() {
return new Promise(function exec(resolve, reject) {
    setTimeout(function f() {
        console.log("timer completed");
    
            resolve("done");
        
        
    },10000);
})
}


async function consume() {
   console.log("start");
   const response = await returnDummyPromise();
   console.log("response is", response);
}
consume();
console.log("ending");

//  In this example  execution steps are like

/*  step - 1   consume(); -- it print  "start"  from console.log("start") from below function

async function consume() {
   console.log("start");
   const response = await returnDummyPromise();
   console.log("response is", response);
}

then program goes to awiat, then await throw the program from async function



step - 2   console.log("ending");  print    ending


step - 3

after completion of all remaining code program goes to await and start executing / calling returnDummyPromise()
and gives output as  "timer completed"

step - 4 
execution of console.log("response is", response);

shows output as response is done

because returnDummyPromise create a new promise and value will be done after 10s



*/