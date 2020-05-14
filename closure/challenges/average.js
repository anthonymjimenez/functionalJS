
const average = () => {
    var sum = 0;
    var count = 0;
    return function innerFunction(num) {
        if(num === parseInt(num, 10)) {
            sum += num;
            count++; 
            }
        return count ? sum / count : 0
        }
    }

  const avgSoFar = average();
  console.log(avgSoFar()); // should log: 0
  console.log(avgSoFar(4)); // should log: 4
  console.log(avgSoFar(8)); // should log: 6
  console.log(avgSoFar()); // should log: 6
  console.log(avgSoFar(12)); // should log: 8
  console.log(avgSoFar()); // should log: 8
     