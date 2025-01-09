//  creating a class

class product {
    //  creating a constructor
    constructor(n, p, d) {
        //  this keyword points to the empty object thats we created by using new keyword
        this.name = n;
        this.price = p;
        this.discount = d;
        // console.log(this);

        // console.log("called constructor");
    }


    //  diaplay() is a  method just like normal function without function keyword
    display() {
        // console.log("This is a product");

        //  in every method of the class product we have access to this keyword . we can access property of the object in any method inside the class product
        console.log("the name of the product is", this.name, "price is", this.price);
    }

    discountedPrice() {
        let newPrice = this.price*(Math.floor(100 - this.discount) / 100);
        return newPrice;
    }
}

// p.display();
// console.log(p);


const i1 = new product('iphone', 100000, 10);  //  iphone gets allocated to n parameter and 100000 is allocated to p of constractor(n, p)
console.log(i1.discountedPrice());
const i2 = new product('goglepixel', 90000, 10);
console.log(i2.discountedPrice());
console.log(i1, i2);