//  higher order functon - function that takes another function as argument


 function f(x, fn) {
    /*
    x -> number
    fn -> function
    */
   console.log(x);
   console.log(fn);
   fn();
 }




 f(10, function exc() {
    console.log("I am an expression passed to hOF");
 })






 let arr = [1,10,9,100,1000,11,12,13,14,2,3];
 arr.sort();  //  it sort my array in lexicographical order. it do not sort in proper way
 console.log(arr);



 //  sort Array b in increasing order
 
 let b = [1,10,9,100,1000,11,12,13,14,2,3];
 b.sort(function(a , b) {
    return a - b;  
/* 
sort function uses the result of a - b to decide their order:
If a - b < 0(negative), it puts a before b.
If a - b === 0, it keeps their order as it is.
If a - b > 0(positive), it puts b before a.
*/

 });  //  javascript sort is a hOF. thats menas it takes another function as an argument
 //  The sort functon takes a comparator function as an argument
console.log(b);