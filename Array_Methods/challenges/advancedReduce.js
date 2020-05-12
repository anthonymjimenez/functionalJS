const reduce = (array, callback, initValue) => {
    accumulator = initValue
    forEach(array, el => accumulator = callback(accumulator, el))
    return accumulator
}

//console.log(reduce([1,2,3,4], addTwo, 0))


const intersection = (...arrays) => {
    return arrays.reduce((acc, curr) => {
        return acc.filter(el => curr.includes(el) )
    })
};
console.log(intersection([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));
[1,5]


const intersectionWithReduce = (...arrays) => {
   return reduce(arrays, (ac, array)  => array.filter(accumItem => ac.includes(accumItem)) , arrays[0])
}
 console.log(intersectionWithReduce([5, 10, 15, 20], [15, 88, 1, 5, 7], [1, 10, 15, 5, 20]));

 
 const union = (...arrays) => {
    return arrays.reduce((acc, curr) => {
      const newElements = curr.filter(el => !acc.includes(el));
      return acc.concat(newElements);
    });
  }; 

  console.log(union([1, 10, 15, 20], [5, 88, 1, 7], [1, 10, 15, 5]));