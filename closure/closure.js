// /// CLOSURE ####
// Closure takes advantage of JavaScript's lexical scope to create a Closed Over Variable Enviroment
// In plain words, a JS function can return another function that has access to the outer functions variables 
// 

const outer = () => {
     let counter = 0; // this variable is outside incrementCounter's scope
     const incrementCounter = () => {
       counter++;
       console.log('counter', counter);
     }
     return incrementCounter;
   };
  
  const myCounter = outer();

// here is an example that uses closure to create parital function declarations
const addByX = (x) => {
    return innerFunc = input => {
        return x + input
     }
 }


// closure is useful for functions that only run under strict conditions 

//example A
const once = (func) => {
    var counter = 0;
    return callback = (input) => {
    if(counter == 0) {
        counter++
        return func(input)     
        }
        else {
        console.log("ERROR")
       }
     }
    }

// example B 


function sOuter() {
    var once = 1;
    return function inner() {
    if(once == 1) {
        once++;
        return "Successful login ";}

    else {
        return "You are already logged in!";
        }
    }
}
 
const anthonylogin = sOuter()

console.log(anthonylogin()) 
console.log(anthonylogin())
console.log(anthonylogin())


// maybe it can also be useful to delay an action? speculation here

const after = (count, func) => { 
            let counter = 0;
            return innerFunc = (value) => {
                if(counter >= count) {
                    return func(value)
                   }
                else {
                    counter++
                    return `${count - counter + 1} turns until action completes`
            }
            }
        }
        

const add2 = (x) => x + 2

var delayAdd2 = after(3, add2) 

console.log(delayAdd2(7))
console.log(delayAdd2(7))
console.log(delayAdd2(7))
console.log(delayAdd2(7))



    