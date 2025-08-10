//  this file is works as a server

const express = require('express')
const app = express();

//  console.dir(app);  //  printing the object. we can see method,properties

let port = 8080;  //  3000
app.listen(port, () => {  //  .listen() will listen incoming api request 
    console.log(`app is listening on port ${port}`);
})

// app.use((req, res) => {
// console.log(req)
// console.log("Request received")
//res.send("This is a basic response"); //  sending responses in string format

//    res.send({
//         name:"apple",
//         color:"red"
//     });  //  sending request in javascript object format

// let code = "<h1>Fruits</h1><ul><li>apple</li><li>orange</li></ul>"
// res.send(code);

// });


app.get("/", (req, res) => {
    res.send("you contacted root path");

})

app.get("/apple", (req, res) => {
    res.send("You contacted apple path")
})

app.get("/orange", (req, res) => {
    res.send("You contacted orange path")
})

app.get("*", (req, res) => {
    res.send("This path does not exist")
})


