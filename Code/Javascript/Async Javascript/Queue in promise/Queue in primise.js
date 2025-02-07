function getRandomInt(max) {
    return Math.floor(Math.random() * max);
}

function createPromiseWithTimeout() {
    return new Promise(function executor(resolve, reject) {
        console.log("Entering the executor callback in the promise constructor");
        setTimeout(function () { // Fixed typo in 'function'
            let num = getRandomInt(10);
            if (num % 2 === 0) {
                // If the random number is even, we fulfill the promise
                resolve(num);
            } else {
                // If the random number is odd, we reject the promise
                reject(num);
            }
        }, 10000);
        console.log("Exiting the executor callback in the promise constructor");
    });
}

//  consuming the promise
console.log("starting");
const p = createPromiseWithTimeout();
console.log("wew are now waiting for the prmise to complete");
console.log("currently my promise object is like ... ", p);

p.then(
    function fulfillHandler(value) {
        console.log("Inside fulfill handler with value", value)
        console.log("Promise after fulfillment is", p);
    },
    function rejectionHandler(value) {
        console.log("Inseide rejection handeler with value", value)
        console.log("Promise after rejection is", p);
    }
);