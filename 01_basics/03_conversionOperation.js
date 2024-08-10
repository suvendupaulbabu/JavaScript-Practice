let score = undefined;
let valueInNumber = Number(score)
let isLoggedIn = 0
let convertIsLoggedIn = Boolean(isLoggedIn);
let number = 40;
let numberToString = String(number);


//console.table([typeof score, typeof(score), typeof valueInNumber, valueInNumber, convertIsLoggedIn, typeof numberToString, numberToString]);

/* 
* Note (Using Number Methods return value type)
if string like "40" => return 40
if string like "40abc" => return NaN
if boolean like false/true => false = 0; true = 1;
if null like null => return 0
if undefined like undefined => return NaN
*/

/* 
Note If need to convert boolean value

0 => false, 1 => true
""(empty string) => false, "Suvendu" => true
*/


// ********************************************* Operations *********************************************
let value = 3;
let negativeValue = -value;
// console.log(negativeValue);

//console.log("1" + 1 + 2);
//console.log(1 + 2 + "2");
//console.log(+"");

let gameCounter = 100;
++gameCounter;
//console.log(gameCounter);

// Postfix (x++) Example
let postfix_value = 3;
let postfixIsAssigned = postfix_value++;
console.log(`${postfix_value} : ${postfixIsAssigned}`);

// Prefix (++x)
let prefix_value = 3;
let prefixIsAssigned = ++prefix_value;
console.log(`${prefix_value} : ${prefixIsAssigned}`);