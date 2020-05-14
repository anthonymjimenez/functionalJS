function makeFuncTester(arrayOfTests) {
    return function(callback) {
           for(let tuple of arrayOfTests) {
               if(callback(tuple[0]) !== tuple[1]) return false
           }
                   return true
               
           }
    }

const capLastTestCases = [];
capLastTestCases.push(['hello', 'hellO']);
capLastTestCases.push(['goodbye', 'goodbyE']);
capLastTestCases.push(['howdy', 'howdY']);
const shouldCapitalizeLast = makeFuncTester(capLastTestCases);
const capLastAttempt1 = str => str.toUpperCase();
const capLastAttempt2 = str => str.slice(0, -1) + str.slice(-1).toUpperCase();
console.log(capLastAttempt2("anthony"))
console.log("anthony")
console.log(shouldCapitalizeLast(capLastAttempt1)); // should log: false
 console.log(shouldCapitalizeLast(capLastAttempt2)); // should log: true
© 2020 GitHub, Inc.