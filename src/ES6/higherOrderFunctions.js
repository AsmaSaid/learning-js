// map, sort, reduce, filter, forEach

// 1-The map function takes a function as an argument.

let double = n => n * 2;
[1, 2, 3, 4].map(double);

// Or, with an anonymous function:
[1, 2, 3, 4].map((n) => {
    return n * 2;
});