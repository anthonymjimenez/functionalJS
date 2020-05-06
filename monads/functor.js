const Box = x =>
({
    map: f => Box(f(x)),
    fold: f => f(x),
    inspect: `Box(${x})`
})

const nextCharForNumberString_ = str => {
    const trimmed = str.trim()
    const number = parseInt(trimmed)
    const nextNumber = new Number(number + 1)
    return String.fromCharCode(nextNumber)
}

const nextCharForNumberString = str => 
    Box(str)
    .map(x => x.trim())
    .map(trimmed => parseInt(trimmed, 10))
    .map(number => new Number(number + 1))
    .fold(String.fromCharCode)


const result = nextCharForNumberString('    64')


// -----

const first = xs => xs[0];

const halfTheFirstLargeNumber_ = xs => {
  const found = xs.filter(x => x >= 20);
  const answer = first(found) / 2;
  return `The answer is ${answer}`;
};

const halfTheFirstLargeNumber = xs => 
  Box(xs)
  .map(xs => xs.filter(x => x >= 20))
  .map(found => first(found) / 2)
  .fold(answer => `The answer is ${answer}`)
 
  

const res = halfTheFirstLargeNumber([1, 4, 50]);


const moneyToFloat_ = str =>
  parseFloat(str.replace(/\$/, ''))

const moneyToFloat = str => 
  Box(str)
  .map(s => s.replace(/\$/, ''))
  .fold(s => parseFloat(s))


const percentToFloat = str => 
    Box(str)
    .map(s => s.replace(/\%/, ''))
    .map(s => parseFloat(s))
    .map(f => f * 0.0100)

console.log(res);
console.log(moneyToFloat('$5.00'))