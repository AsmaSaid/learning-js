// map, sort, reduce, filter, forEach

// 1-The map function takes a function as an argument.

let double = n => n * 2;
[1, 2, 3, 4].map(double);

// Or, with an anonymous function:
[1, 2, 3, 4].map(n => {
  return n * 2;
});

const hobbies = ["a", "b", "c"];
for (let hoppy of hobbies) {
  console.log(hoppy);
}

// map returnes an new aaray.
console.log(hobbies.map(hoppy => `Hoppy: ${hoppy}`));
console.log(hobbies);
