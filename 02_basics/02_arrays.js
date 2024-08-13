const heros = ["thor", "Ironman", "spiderman"]
const dc_heros = ["superman", "flash", "batman"]

// Create array using new keyword
const array02 = new Array(1, 2, 5, 6)
//console.log(array02);

// push method
//heros.push(dc_heros)
// concat method
const final_heros = heros.concat(dc_heros);
//console.log(final_heros);

// spread
const spread_heros = [...heros, ...dc_heros]
//console.log(spread_heros)

// Object Literals
const array = [1, 2, 3];
const obj = { ...array };

// Nested array to concat one array using flat() method
const nestedArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//const convertNestedArray = nestedArr.flat(1) // Need to fill depth like in number for example 1 OR fill Infinity for select all nested array
const convertNestedArray = nestedArr.flat(Infinity) // Need to fill depth like in number for example 1 OR fill Infinity for select all nested array
console.log(convertNestedArray)
console.log(typeof convertNestedArray)

// isArray() method
const myName = 'PUER'
//console.log(Array.isArray(nestedArr)); // Using Array.isArray() method check is it array or not
console.log(Array.isArray("PUER"));
console.log(Array.from({Name: 'PUER'})); // Using Array.from() method convert string to array

let score1 = 100
let score2 = 200
let score3 = 300

console.log(Array.of(score1, score2, score3));