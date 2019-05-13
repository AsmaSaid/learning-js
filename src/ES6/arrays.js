// map, every, some, sort, reduce, filter, forEach

//initialize array

const a1 = [];
const a2 = [1, 2, 3, 4, 5, 6, 7, 8, 9];
const a3 = Array.of(1, 2, 3);
const a4 = Array(4).fill(3); // init array of 4 elements all with value 3

//length of array
let len = a1.length;

//Iterating the array
/*-------------------------------------------------------------------------------------------------------------------------------*/

// 1 -filter : will create an array of all the elements matching your condition in the callback

let res = a2.filter(item => item > 3);
console.log(res);
/*-------------------------------------------------------------------------------------------------------------------------------*/

// 2- Every : will return true if every element in the array matches your condition in the callback
res = a2.every(item => item == 7);
console.log(res);
/*-------------------------------------------------------------------------------------------------------------------------------*/
// 3- some : will return true if any element in the array matches your condition in the callback

res = a2.some(item => item == 7);
console.log(res);
/*-------------------------------------------------------------------------------------------------------------------------------*/

// 4- map: Iterate the array and return a new one with the returned result of a function

// The map function takes a function as an argument.
let double = n => n * 2;
[1, 2, 3, 4].map(double);

// Or, with an anonymous function:
[1, 2, 3, 4].map(n => {
  return n * 2;
});

res = a2.map(item => item + 10);
console.log(res);
/*-------------------------------------------------------------------------------------------------------------------------------*/
// 5- reduce:

function sum(a, b) {
  return a + b;
}
let res = a2.reduce(sum);
console.log(res);
