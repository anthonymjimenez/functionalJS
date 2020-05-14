// /// CLOSURE ####

// function addTwo(num) {
//     console.log(num + 2)
//     return num + 2
//   }
  
//   const delay = (callback, wait) => {
//     setTimeout(callback, wait)
//   }
//   var delayAddByTwo = (num) => {
//     delay(() => {addTwo(num)}, 100);
//   }
//   console.log(delayAddByTwo)
//   delayAddByTwo(6)

  
// const createFunction = () => {
//     return innerFunction = () => {
//         console.log("Hello")
//     }
// }
// const function1 = createFunction(); 
// function1();

// const createFunctionPrinter = (input) => {
//     return innerFunction = () => {
//         console.log(input)
//     }
// }

//  const printSample = createFunctionPrinter('sample');
// printSample();
// const printHello = createFunctionPrinter('hello');
//  printHello();

//  const addByX = (x) => {
//     return innerFunc = input => {
//          return x + input
//     }
// }
//  // Challenge 3
// const outer = () => {
//     let counter = 0; // this variable is outside incrementCounter's scope
//     const incrementCounter = () => {
//       counter++;
//       console.log('counter', counter);
//     }
//     return incrementCounter;
//   };
  
//   const willCounter = outer();
//   const jasCounter = outer();
 
  

    
   
//     const once = (func) => {
//         var counter = 0;
//         return callback = (input) => {
//             if(counter == 0) {
//                 counter++
//                 return func(input)
//             }
//             else{
//                 console.log("ERROR")
//             }
//         }
//     }



//     const after = (count, func) => {
//         let counter = 0;
//         return innerFunc = (value) => {
//             if(counter >= count) {
//                 return func(value)
//             }
//             else {
//                 counter++
//                 return "counter " + counter
//             }
//         }
//     }


//     function russianRoulette(num)  {
//         return function inner() {
//           if(num > 1) {
//             num--;
//            return 'click'
//           }
//           else if(num == 1) {
//             num = 0
//             return 'bang'
//         }
//             else { 
//             return 'reload to play again'}
//         }
//       };


//       const play = russianRoulette(5);
//       console.log(play()); // should log: 'click'
//       console.log(play()); // should log: 'click'
//       console.log(play()); // should log: 'bang'
//       console.log(play()); // should log: 'reload to play again'
//      console.log(play()); // should log: 'reload to play again'

//      const average = () => {
//          var sum = 0;
//          var count = 0
//          return function innerFunction(num) {
//              if (num != null) {
//                 sum += num;
//                 count++; 
//              }
//              return count ? sum / count : 0
//          }
//      }

//  const avgSoFar = average();
//  console.log(avgSoFar()); // should log: 0
//  console.log(avgSoFar(4)); // should log: 4
//  console.log(avgSoFar(8)); // should log: 6
//  console.log(avgSoFar()); // should log: 6
//  console.log(avgSoFar(12)); // should log: 8
//  console.log(avgSoFar()); // should log: 8

//  function sOuter() {
//      var once = 1;
//      return function inner() {
//          if(once == 1) {
//              once++;
//              return "Successful login ";}

//             else {
//                 return "You are already logged in!";
//             }
//          }
//      }
 
//      const staceylogin = sOuter()
//  //
//      console.log(staceylogin()) 
//      console.log(staceylogin())
//      console.log(staceylogin())

  
     
     function makeFuncTester(arrayOfTests) {
         return function(callback) {
                for(let tuple of arrayOfTests) {
                    if(callback(tuple[0]) !== tuple[1]) return false
                }
                        return true
                    
                }
         }
     
     // /*** Uncomment these to check your work! ***/
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