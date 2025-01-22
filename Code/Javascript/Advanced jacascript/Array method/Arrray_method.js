let arr = [10, 11, 12, 13];

console.log(arr);

//  push function is used to add element at the last

arr.push(9);
arr.push(19);
console.log(arr);

arr.pop();  //  to remove the element from the last
arr.pop();
console.log(arr);




arr.shift();  //  to remove an element from the start

console.log(arr);


arr.unshift(99);  //  to add element at first
console.log(arr);





const a1 = [1, 2, 3, 4];
const a2 = [5, 6, 7, 8];

const result = a1.concat(a2);  //  to return a new array with elements of a1 followed by element of a2
console.log(result);



//  fetch some part of an array

const x = [1, 2, 3, 4, 5, 6, 7, 8];

const s = x.slice(2,6);  //  to fetch data from index 2 to index (6 - 1)
console.log(s);




//  join() function  -  to club all the element together to form a string separated by given character

const a = [1, 2, 3, 4, 5, 6, 7, 8, 9];

//  const z = a.join();  //  join() function club the elements together
//  const z = a.join(" ");  //  join() function club the elements together with black space
const z = a.join("-");  //  join() function club the elements together with hyphen(-)
console.log(z);


//  reverse na array

const rev = a.reverse();
console.log(rev);



//  retrun index of a particular array

const b = [1, 2, 3, 4, 5, 6, 7, 8];
console.log(b.indexOf(6));  //  output is 5. because index of 6 is 5





//  splice() method - The splice() method in JavaScript is used to add, remove, or replace elements in an array

//  sybtex -  array.splice(start, deletecount, intem1, item2, ...)

//  removing number

let number = [10, 20, 30, 40, 50];
let remove = number.splice(2,2);
console.log(number);
console.log(remove);

//  Adding number

let number2 = [10, 50];
number2.splice(1, 0 , 20, 30, 40);

console.log(number2);

//  Replacing element

let number3 = [10, 20, 30, 40, 50];
number3.splice(1, 3, 100, 200); // Replace 3 elements starting at index 1
console.log(number3); // Output: [10, 100, 200, 50]


//  Removing all elements from a starting index

let number4 = [10, 20, 30, 40, 50];
number4.splice(2); // Remove all elements from index 2 to the end
console.log(number4); // Output: [10, 20]


//  Removing and adding at the same time

let number5 = [10, 20, 30, 40, 50];
number5.splice(1, 2, 100, 200); // Remove 2 elements at index 1 and add 100, 200
console.log(number5); // Output: [10, 100, 200, 40, 50]

