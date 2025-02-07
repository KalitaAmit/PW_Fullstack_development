function fetchData(url) {
    return new Promise(function (resolve, reject) {
        console.log("started downloading from", url);
        setTimeout(function processDownloading() {
            let Data = "Dummy data";
            console.log("Downloaded completed");
            resolve(Data);
        }, 7000);
    })
}

console.log("start");
let promiseObj = fetchData("lwicqzo");
promiseObj.then(function A(value) {
    console.log("value is", value);

})
console.log("end");
