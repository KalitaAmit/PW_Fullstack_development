function download(url) {
    console.log("started downloading content from", url);
    return new Promise(function exec(res, re) {
        setTimeout(function p() {
            console.log("completed downloading data is 5s");
            const content = "ABCDEF";
            res(content);
        }, 5000);
    })
}
x = download("www.xyz.com")

//  chaining multiple .then 
x
    .then(function fulfillHandler(value) {
        console.log("content downloaded is", value);
        return "new promise string";
    },
        function rejectHandler(value) {
            console.log("rejected with", value);
        }

    )

    .then(
        function newFulfillHandler(value) {
        console.log("value from chain .then promise", value)
   }
 )
