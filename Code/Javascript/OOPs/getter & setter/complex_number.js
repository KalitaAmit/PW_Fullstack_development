class complexNumber {
    #real;
    #imagenary;
    
    
    constructor(r, i) {
        this.#real = r;
        this.#imagenary = i;
    }

    get real() {
        return this.#real;
    }

    get imagenary() {
        return this.#imagenary;
    }
    addComplexNumber(c) {
        this.#real += c.real;
        this.#imagenary += c.imagenary;

    }

    display()  {
        console.log(this.#real, " + i", this.#imagenary);
    }
}

const c1 = new complexNumber(5, 9);
const c2 = new complexNumber(1, 2);
c1.addComplexNumber(c2);
c1.display();