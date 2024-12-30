//  create an array
let arr = [1,2,3,4,5];
console.log(arr);


// creating heterogenous array
let x = ["Amit", 1,2,3, "Bengaluru", false, 2.9];
console.log(x);

//  creating empty array but allocating 10 continuou memory location

let a = new Array(10);
console.log(a);


// another way to create array

let color = Array("black", "blue", "red", "white");
console.log(color);


// accessing data using index

let y = [22,19,30,1,6];
// syntex to access data/element from array
//  (name of the array[index of the element])
console.log(y[2]);

//  updating data in an array

y[1] = 99;
y[0] = "Amit";
console.log(y);