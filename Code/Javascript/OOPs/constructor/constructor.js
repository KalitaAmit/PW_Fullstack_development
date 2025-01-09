//  creating blueprint of name product

//  instantiation of class menas using the class we create reallife entity/object

class product {


    //  constructor method are special method 
    //  it  is a special method of creating and initializing object using class
    //  constructor function is going to execute first

    constructor(n, p) {
        console.log("calling the constructor");
        //  below things are property
        this.name = n;  //  this keyword refers to the same empty object we created by using new keyword
        //  this keyword helps you to access the empty object. this.name = n; create key is name and value is n
        this.price = p;  //  these properties are called as data member
    

    }

    display() {  //  also called as member function
        //  in the class body we can define multiple method
        //  method are nothing but function
        //  method`s of class represent behaviour
        console.log("Displaying a product", this.name, this.price); //  this keyword is available in every method of the class
    }
}


//  initalize a new object using class

const p = new product(" iphone ", 100000);
//  new keyword create empty object
//  product() calls the constructor function
console.log(p);
p.display();  //  name of the object.behaviour
