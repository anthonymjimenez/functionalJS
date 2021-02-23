//currying allows you to pass some arguments to a function
// while omitting others for a later declaration

const { curry, filter, reduce, test } = require("rambda");
// rambda is a functional library

// Example A
const modelo = curry((x, y) => y % x);

const isOdd = modelo(2); //x

const _filter = curry((f, arr) => arr.filter(f));

const filterOdd = _filter(isOdd);

console.log(filterOdd([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]));

// Example B
const replace = curry((regex, replacement, str) =>
  str.replace(regex, replacement)
);

const replaceVowels = replace(/[AEIOU]/gi, "!");

const result = replaceVowels("Hey I got the stuff");

// ___________________________

// The code above demonstrates how currying allows us to create reuseable functions
//

// ___________________________

// currying args is most effective when the final argument is a value that we want to
// complete some sort of action on ... the example below illustrates this point

// with currying -- modular, reusable, harder to add bugs!
const split = curry((delimiter, string) => string.split(delimiter));

const splitWithArrows = delimiter => string => string.split(delimiter);

const splitOnSpace = split(" "); // you could easily create variations of this function that split on different values

const splitLine = splitWithArrows("/");

// this sort of composition is common in functional programming
// if we wrote a function that did everything that arrSplitOnSpace does it would be less
// reusable and I would argue less readable and more prone to bugs 

// obviously in many situations this is overkill BUT having currying in your 
// skillset will help you identify moments where this can be very useful
const arrSplitOnSpace = (arr) => arr.map(splitOnSpace);

console.log(splitOnSpace("Hello children batman"));

console.log(arrSplitOnSpace(["Skyrim is never", "going away"]));

console.log(splitLine("I can/I cat"));

// p.s generally speaking the shape of functions really matters in FP
// most of the time developers want to work with unary or binary functions
// currying is very useful for achieving this 