var readline = require('readline-sync')

function answer(arg) {
    return readline.question(arg)
}

const outer = (function(name, number) {
    const shuffle = (array) => array.sort(() => Math.random() - 0.5);
    var luckyNumber = shuffle([1,2,3,4,5,6,7,8,9,10,11])[0];
    var counter = 0;
   
    return function inner() {
         while(number != luckyNumber) {
                 counter += 1 
                 number = answer(`Sorry wrong answer, try again!`)
            }
            return `Hey ${name}! You matched your number ${number} with the lucky number ${luckyNumber} on the ${counter} increment`
        };
    }
)

   
const luckyNumber = outer(answer('Whats your name'), answer('Guess my lucky number!'))

console.log(luckyNumber())
