function customConsole() {
         
    return function inner(d) {
        return   console.log(d);
    }
 }

 const myConsole = customConsole()

 myConsole("This is an example of closure in JS!")