class Product {  //  class is a kind of template
    discount;
    #rating = 99;
    #name;  //  declare the private member first before you use it
    description = "custom";
    constructor(n, p) {
        this.#name = n;  //  this keyword actually reffers to the same empty object we created
        this.price = p;
    }

    static customMethod() {
        console.log("callling the custom static method");
    }


    display() {  
        console.log("Displaying a product", this.#name, this.price, this.#rating);
    }

    getName() {
        console.log(this.#name);
    }

    setName(newName) {
        this.#name = newName;
    }

    setRating(r) {
        if(r < 0)
            return;
    }
}

const p = new Product("i phone", 100000);
console.log(p);

p.getName();
p.setName("google pixel");
p.getName();
