/***********   Number   */

const score = 400;
const balance = new Number(score) // Using new Number() it's convert to object
//console.log(balance);
const newBalance = balance
//console.log(newBalance.toString());
//console.log(newBalance.toString().length);
//console.log(newBalance.toFixed(2));
//console.log(typeof newBalance.toString());

const otherNumber = 143.5689
//console.log(otherNumber.toPrecision(3));

const numberHundred = 1000
//console.log(numberHundred.toLocaleString()); // It's return number as standard dollar
//console.log(numberHundred.toLocaleString('en-IN')); // It's return number as standard Indian Rupee
const numberHundredLocalString = numberHundred.toPrecision(4)
//console.log(numberHundred.toLocaleString('en-IN'))

/***********   Maths   */
console.log(Math);
//console.log(Math.abs(-10)); // It's convert nagetive to positive value
//console.log(Math.round(5.51)); // It's round number and remove after demical number
//console.log(Math.ceil(5.1)); // It's convert 5.1 to 6 because of it's ceil this number
//console.log(Math.floor(5.9)); // It's convert 5.1 to 5 because of it's floor this number
//console.log(Math.SQRT2);
console.log(Math.min(2, 5, 9, 1)); // It's check minumum value of array
console.log(Math.max(2, 5, 8, 9)); // It's check maximum value of array

