// implement reduce 
// this one was tricky ^-^ 
// reduce is a fantastic method 

function addTwo(y) {
   return 2 + y
}

const forEach = (array, callback) => {
    for(var i = 0; i < array.length; i++) {
        callback(array[i])
    }
}
const reduce = (array, callback, initValue) => {
    accumulator = initValue
    forEach(array, el => accumulator = callback(accumulator, el))
    return accumulator
}

console.log(reduce([1,2,3,4], addTwo, 0))
