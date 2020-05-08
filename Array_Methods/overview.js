// Array Methods may be the easiet way to transform
// your codebase from imperative to declarative

// Here is an example that reverses a string
// using built in methods 
// this makes your code easier to reason about 
// and easier to limit the amount of areas where
// bugs can arise 


// with methods 
console.log("The Happy Dog".split('').reverse().join(''))

// w/o
var dogArray = "The Happy Dog".split('')
var newArray = []
for(var i = dogArray.length; i >= 0; i--) {
  newArray.push(dogArray[i])
}

console.log(newArray.join(''))

// map, forEach, filter and reduce are some of the most
// popular functional methods
// check out my other files for examples of those!
