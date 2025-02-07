function createPromise() {
    return new Promise(function exec(resolve, reject) {
        console.log("Resolving the promise");
        resolve("Done");
    });
}

setTimeout(function process() {
    console.log("Time completed");
}, 0);

let p = createPromise();
p.then(function fulfullHandler1(value) {
    console.log("we fulfilled with a value1", value);
}, function rejwctionHandler() { }
);
p.then(function fulfullHandler2(value) {
    console.log("we fulfilled with a value2", value);
}, function rejwctionHandler() { }
);
p.then(function fulfullHandler3(value) {
    console.log("we fulfilled with a value3", value);
}, function rejwctionHandler() { }
);


for(let i = 0; i < 10000000000000; i++) {}


console.log("ending");
