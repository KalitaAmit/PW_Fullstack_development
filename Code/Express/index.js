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


// app.get("/", (req, res) => {
//     res.send("hello, i am root");

// })

// app.get("/apple", (req, res) => {
//     res.send("You contacted apple path")
// })

// app.get("/orange", (req, res) => {
//     res.send("You contacted orange path")
// })





//  path parameter

app.get("/:username/:id", (req, res) => {
    let { username, id } = req.params;
    res.send(`welcome to the page of @${username}`);
});




//  Example of Query string

app.get("/search", (req, res) => {
    console.log(req.query);  //  print all the query that comes with the request
    res.send("no result");
})






