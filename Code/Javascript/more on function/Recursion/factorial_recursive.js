// using recursion

function f(n) {
    // base case
    if (n == 1) {
        return 1;
    }
    return ans = n * f(n - 1);
}

console.log(f(5));


//using loop

function factorialWithLoop(n) {
    let ans = 1;
    for (let i = 1; i <= n; i++) {
        ans = and * i;
    }
    return ans;
}