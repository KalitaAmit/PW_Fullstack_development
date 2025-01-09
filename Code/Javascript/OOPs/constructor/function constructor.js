//  this function actually act as constructor
function Product(n, p) {
    this.name = n;
    this.price = p;
    return {x:10, y: 20}

    //  if you do not return anything, javacripts return a newly created object
    //  if you return primitive, then also return newly created object
    //  if you return custom object, then javascript will return the coustom object not the newly created object
    
}

const p = new Product('i phone', 100000);
console.log(p);
