promise.resolve("foo")
//  1. Receive "foo", concatenate "bar" to fit, and resolve that to the next then

.then(
    (string) =>
        new promise((resolve, reject) => {
            setTimeout(() => {
                string += "bar";
                resolve(string);
            }, 10000);
        }),
)

//  2. receive "footbar", register a callback function to work on that string
//  and print it to the console, but not before returning the unworked on
//  string to the next then

.then((string) => {
    setTimeout(() => {
string += "baz";
console.log(string);  //  foobarbaz
    }, 1);
    return string;
})


//  3. print helpful message about how the code in this section will be run
//  before the string is actually processed by the mocked asyncronous code in the
//  previous then block

.then((string) => {
    console.log("Last then :oops ...  didn`t bother to instansiate and return a promise in the prioir then so the sequence");


//  note that 'string' will have the 'baz' bit of it at this point. This
//  is because we mocked that to happen asyncronously with a setTimeout function
console.log(string);  //  foobar
});