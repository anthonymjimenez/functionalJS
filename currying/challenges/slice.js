const slice = curry((start, end, xs) => {
    return xs.slice(start, end)    
 })
 
 const sliceOfCurry = slice(1,3)
 
 console.log(sliceOfCurry(["a", "b", "c"]))