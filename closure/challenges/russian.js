//Russian Roulette implementing closure 


function russianRoulette(num)  {
             return function inner() {
                 num--;
                 if(num < 0) return 'reload to play again';
                 return (num >= 1 ? 'click': "BANG");
                }
            }
    
        const play = russianRoulette(3);
       console.log(play()); // should log: 'click'
       console.log(play()); // should log: 'click'
       console.log(play()); // should log: 'bang'
       console.log(play()); // should log: 'reload to play again'
       console.log(play()); // should log: 'reload to play again'