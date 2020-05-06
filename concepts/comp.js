const _ = require('rambda')
//const {formatMoney} = accounting;

// Example Data
const CARS = [
    {name: "Ferrari FF", horsepower: 660, dollar_value: 700000, in_stock: true},
    {name: "Spyker C12 Zagato", horsepower: 650, dollar_value: 648000, in_stock: false},
    {name: "Jaguar XKR-S", horsepower: 550, dollar_value: 132000, in_stock: false},
    {name: "Audi R8", horsepower: 525, dollar_value: 114200, in_stock: false},
    {name: "Aston Martin One-77", horsepower: 750, dollar_value: 1850000, in_stock: true},
    {name: "Pagani Huayra", horsepower: 700, dollar_value: 1300000, in_stock: false}
  ];

// Exercise 1:
// ============
// use _.compose() to rewrite the function below. Hint: _.prop() is curried.

const isLastInStock = cars => {
  var reversed_cars = _.last(cars)
  return _.prop('in_stock', reversed_cars)
}

const composeLastInStock = cars => 
    _.compose(_.prop('in_stock'), _.last)
 


// Exercise 2:
// ============
// use _.compose(), _.prop() and _.head() to retrieve the name of the first car

const nameOfFirstCar = _.compose(_.prop('name'), _.head )
 

// Exercise 3:
// ============
// Use the helper function _average to refactor averageDollarValue as a composition

const _average = function(xs) { return _.reduce(_.add, 0, xs) / xs.length; }; // <- leave be

const averageDollarValue_ = function(cars) {
  const dollar_values = _.map(_.prop('dollar_value'), cars);
  return _average(dollar_values);
};

var averageDollarValue =
  _.compose( _average , _.map(_.prop('dollar_value')))


console.log(averageDollarValue(CARS)); // , 790700



// Exercise 4:
// ============
// Write a function: sanitizeNames() using compose that returns a list of lowercase and underscored names: e.g: sanitizeNames(["Hello World"]) //=> ["hello_world"].

const _underscore = _.replace(/\W+/g, '_'); //<-- leave this alone and use to sanitize

const sanitizeNames = _.map(_.compose(_.toLower, _underscore, _.prop("name")))

 


// Bonus 1:-
// ============
// Refactor availablePrices with compose.

const availablePrices = function(cars) {
  const available_cars = _.filter(_.prop('in_stock'), cars);
//  return available_cars.map(x => formatMoney(x.dollar_value)).join(', ');
}

// const formatDollarValue = _.compose(formatMoney, _.prop('dollar_value'))

const available_Prices = _.compose(_.filter(_.prop('in_stock')))

  // , '$700,000.00, $1,850,000.00');
  

// Bonus 2:
// ============
// Refactor to pointfree.

const fastestCar = function(cars) {
  const sorted = _.sortBy(car => car.horsepower, cars);
  const fastest = _.last(sorted);
  return fastest.name + ' is the fastest';
}
 
 

const add = (x, y) => x + y

const toUpper = str => str.toUpperCase()

const exclaim = str => str + "!"

const first = xs => xs[0] 

// const compose = (f, g) => x => f(g(x))

const  shout = _.compose(exclaim, toUpper, first)

console.log(shout('tears'))


const lowBoy = _.compose(_.toLower, _.prop('name'))
const _composeLastInStock = _.compose(_.prop('in_stock'), _.last)
 

console.log(lowBoy(CARS[0]))
console.log(_composeLastInStock(CARS))