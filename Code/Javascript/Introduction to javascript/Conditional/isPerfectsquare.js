/*Given a number x, check if x is a perfect square or not ?

Ex : x = 25
Ans : yes

Ex : x = 39
Ans = no 

perfect square example
25 = 5 *5
35 = 6 *6
*/

// let x = 25;
// let y = Math.floor(Math.sqrt(x));
// if (y ** 2 == x) {
//     console.log("yes")
// } else {
//     console.log("no")
// }







// Q. Given a number x, check if it is even or odd using biteise operators only.

// Ex.   X = 7
// Ans. -> odd


// Ex. X = 8
// Ans. -> even

let x = 5;
if(x & 1) {
    console.log('odd')
} else {
    console.log('even')
}