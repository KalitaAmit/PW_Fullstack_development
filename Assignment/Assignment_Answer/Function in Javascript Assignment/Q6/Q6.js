function curry(func) {
    return function curried(...args) {
        if (args.length >= func.length) {
            return func(...args);
        } else {
            return function (...nextArgs) {
                return curried(...args, ...nextArgs); // Combine existing and new arguments
            };
        }
    };
}

function add(a, b) {
    return a + b;
}

const curriedAdd = curry(add);

console.log(curriedAdd(2)(3));
console.log(curriedAdd(4, 5));