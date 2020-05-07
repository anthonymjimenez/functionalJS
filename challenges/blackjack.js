//blackjack implementing closure
const blackjack = (array) => {
    return function dealer(numberA, numberB) {
      var firstTime = true;
      var bust = '';
      var arrayValue = 0;
      var sum = numberA + numberB
      return function player() {
        if(bust) {
          return "you are done!"
        }
        if(firstTime) {
          firstTime = false;
          return sum
        }
          if(sum + array[arrayValue] <= 21) {
             sum = sum + array[arrayValue]
             arrayValue += 1;
            return sum
          }
          else { 
             bust = 'bust'
            return bust
          }
      }
    }
  };
   
  // /*** DEALER ***/
  const deal = blackjack([2, 6, 1, 7, 11, 4, 6, 3, 9, 8, 9, 3, 10, 4, 5, 3, 7, 4, 9, 6, 10, 11]);
  
   /*** PLAYER 1 ***/
   const player1 = deal(6, 5);
   console.log(player1()); // should log: 9
   console.log(player1()); // should log: 11
   console.log(player1()); // should log: 17
   console.log(player1()); // should log: 18
   console.log(player1()); // should log: 'bust'
   console.log(player1()); // should log: 'you are done!'
   console.log(player1()); // should log: 'you are done!'
  