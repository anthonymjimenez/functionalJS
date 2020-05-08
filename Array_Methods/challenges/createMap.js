// implementing my own map function 

const map = (array, callback) => {
    var newArray = []
    for(var i = 0; i < array.length; i++) {
        newArray.push(callback(array[i]))
    }
    return newArray;
}

 console.log(addByTwo(1));



console.log(map([1,2,3,4],addTwo))