const {curry, filter, reduce, test} = require('rambda')


const modelo = curry((x,y) => y % x)


const isOdd = modelo(2) //x 


const _filter = curry((f, arr) => arr.filter(f))

const filterOdd = _filter(isOdd)

console.log(filterOdd([1,2,3,4,5,6,7,8,9,10]))

// ___________________________
const replace = curry((regex, replacement, str) => str.replace(regex, replacement))


const replaceVowels = replace(/[AEIOU]/ig, '!')


const result = replaceVowels("Hey modofucka I got the stuff")

// ___________________________


const split = curry((delimiter, string) => string.split(delimiter))


const splitOnSpace = split(' ')


const sentences = Arr => Arr.map(splitOnSpace)

console.log(splitOnSpace("Hello children batman"))
// ___________________________

const filterQs_ = function(xs) {
    return filter(function(x){ return test(/q/ig, x);  }, xs);
  }
  
//test currys args 
const filterQs = filter(test(/q/ig))
// ___________________________


// BEFORE

const _keepHighest = (x,y) => x >= y ? x : y

const _max = function(xs) {
    return reduce(function(acc, x){
        return _keepHighest(acc, x);
    }, 0, xs)
}

const max = reduce(_keepHighest, 0)

// ___________________________

const slice = curry((start, end, xs) => {
   return xs.slice(start, end)    
})

const sliceOfCurry = slice(1,3)

console.log(sliceOfCurry(["a", "b", "c"]))