const mongoose = require('mongoose');  //  import Mongoose from node_modules file and loads into this index.js file

//  mongoose.connect('mongodb://127.0.0.1:27017/test');  //  this line of code helps us to connect Mongoose into our mongoDB database.we have written same line below


main()
    .then(() => { console.log("connection is successful"); })
    .catch(err => console.log(err));  //  This calls the main() function (defined below). If any error happens during the connection, .catch() will catch it and print it using console.log(err).
// it safely tries to run main(), and if there's an error (like MongoDB not running), it shows the error instead of crashing.


async function main() {   //  → This defines an async function so you can use await inside it.
    await mongoose.connect('mongodb://127.0.0.1:27017/test');  //  This tells Mongoose to connect to MongoDB at the given address, and the await makes the code wait until the connection is successful.


}

//  above code are use to built connection with mongoDB with mongoose




//  creating a Schema
const userSchema = new mongoose.Schema({
    name: String,
    email: String,
    age: Number,
});



//  creating a model
//  const Employee = mongoose.model("Employee", userSchema);


//  creating a model
const User = mongoose.model("User", userSchema);


//  INSERT INTO DOCUMENT
//  INSERTING ONE DOCUMENT  AT A TIME

// const user1 = new User({ name: "Adam", email: "adam@yahoo.in", age: 48 });

// user1.save();


// const user2 = new User({ name: "Eve", email: "eve@google.com", age: 48 });

// user2.save()
//     .then((res) => {  //  res is usually a document of user2
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



//  Inserting multiple data at a time

// User.insertMany(
//     [
//         { name: "Tony", email: "tony@gmail.com", age: 50 },
//         { name: "Peter", email: "peter@gmail.com", age: 50 },
//         { name: "Bruce", email: "bruce@gmail.com", age: 50 },
//     ]
// ).then((res) => {
//     console.log(res);
// });





// Find
//  find all document
// User.find({})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



//  Find document with some filter
// User.find({age: {$gt:49}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });



//  Find one user from document
// User.findOne({age: {$gt:49}})
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




//  Update in a database
//  update one matching

// User.updateOne({ name: "Bruce" }, { age: 99 }).then((res) => {
//     console.log(res);
// }).catch((err) => {
//     console.log(err);
// });



//  update Many matching
//  update all matching at one time

// User.updateMany({ age: { $gt: 49 } }, { age: 55 })
//     .then((res) => {
//         console.log(res);
//     })
//     .catch((err) => {
//         console.log(err);
//     });




//  find and update together

//  Find document whose age is greater than 45 and update to 55
// User.findOneAndUpdate({ age: { $gt: 45 } }, { age: 55 })
//     .then((res) => {
//         console.log(res);

//     })
//     .catch((err) => {
//         console.log(err);
//     });


//  Delete in Mongoose
//  deleting only one document whose name is Bruce
User.deleteOne({ name: "Bruce" }).then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
});

// delete many document 
//  whose age greater than 40

User.deleteMany({ age: { $gt: 40 } }).then((res) => {
    console.log(res);
}).then((err) => {
    console.log(err);
});



