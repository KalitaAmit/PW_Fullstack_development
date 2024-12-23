
let marks = 90;

if (marks > 85) {
    console.log("This is topper student")
} else {
    console.log("This is an average student")
}


/* Q: Given size of 3 line segments, check that whether using these segments we
 can form a triangle or not ? */

/*  Ex: l1 = 7, l2 = 10, l3 = 5
Ans -> "we can make a triangle" */


/* EX: l1 = 1, l2 = 10, l3 = 12
Ans -> "no we can not make a triangle"*/


/* note : som of 2 sides should be greater than third side, and this should be true for all side 
((l1 + l2) > l3) and ((l1 + l3) > l2) and ((l2 + l3) > l1)*/


let l1 = 1, l2 = 10, l3 = 12;
if (((l1 + l2) > l3) && ((l1 + l3) > l2) && ((l2 + l3) > l1)) {
    console.log("ys we can make a triangle")
} else {
    console.log("no we can not make a triangle")
}