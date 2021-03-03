// const logger = require('./Logger');

// logger.log('NodeJS is AWESOME 🤩!');
// logger.log('OOProgramming is Outstanding! 🕺🏻');
// logger.log('Design Patterns are Cool! 😎');

// logger.setStrategy('toMorseCode');

// logger.log('NodeJS is AWESOME Returns! 🤩!');
// logger.log('OOProgramming is Outstanding - Part 2! 🕺🏻');
// logger.log('Design Patterns are Cool! 😎 OMG!');
const theNumber = 10e8;

function isMagicNumber(number) {
  const cubeSum = number.toString().split('').reduce(
    (acc, currentValue) => acc + Math.pow(Number(currentValue), 3)
    , 0
  );
  if (cubeSum == number) {
    return number;
  }

  return;
}

let forNumber = theNumber;
console.time('forloop');

while (forNumber >= 0) {
  if (isMagicNumber(forNumber)) { 
    console.log('Magic:', forNumber)
  }
  forNumber--;
}

console.log(forNumber);
console.timeEnd('forloop');

// let mapNumber = theNumber;
// console.time('forloop');

// Array.
// console.time('forloop');