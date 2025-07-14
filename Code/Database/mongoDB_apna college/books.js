//  import Mongoose from node_modules file and loads into this index.js file
const mongoose = require('mongoose');

main()
    .then(() => { console.log("connection is successful"); })
    .catch(err => console.log(err));

async function main() {   //  → This defines an async function so you can use await inside it.
    await mongoose.connect('mongodb://127.0.0.1:27017/amazon');
    //  This tells Mongoose to connect to MongoDB to the amazon database and the await makes the code wait until the connection is successful.


}

//  above code are use to built connection with mongoDB with mongoose


// schema validation



//  another ways to write schema with validation
const bookSchema = new mongoose.Schema({
    title: {
        type: String,
        required: true,
    },
    author: {
        type: String,
    },
    price: {
        type: Number,
    },
    discount: {
        type:Number,
        default: 0  //  by default discount of the book is zero without inserting any key value pair
    }
});



//  creating the collection
const Book = mongoose.model("Book", bookSchema);


//  inserting data

// let book1 = new Book({
//     title: "Mathematics XII",
//     author: "RD sharma",
//     price: 1200

// });

let book1 = new Book({
    title: "gone girl",
    price: 399

});

// save the data into Collection
book1.save().then((res) => {
    console.log(res);
}).catch((err) => {
    console.log(err)
})