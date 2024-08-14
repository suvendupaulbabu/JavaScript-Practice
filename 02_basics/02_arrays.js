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

// spread Oparetor
const spread_heros = [...heros, ...dc_heros]
//console.log(spread_heros)

// Object Literals
const array = [1, 2, 3];
const obj = { ...array };

// Nested array to concat one array using flat() method
const nestedArr = [1, 2, 3, [4, 5, 6], 7, [6, 7, [4, 5]]]
//const convertNestedArray = nestedArr.flat(1) // Need to fill depth like in number for example 1 OR fill Infinity for select all nested array
const convertNestedArray = nestedArr.flat(Infinity) // Need to fill depth like in number for example 1 OR fill Infinity for select all nested array
//console.log(convertNestedArray)
//console.log(typeof convertNestedArray)

// isArray() method
const myName = 'PUER'
//console.log(Array.isArray(nestedArr)); // Using Array.isArray() method check is it array or not
//console.log(Array.isArray("PUER"));
//console.log(Array.from({Name: 'PUER'})); // Using Array.from() method convert string to array

let score1 = 100
let score2 = 200
let score3 = 300

//console.log(Array.of(score1, score2, score3));

// Array filter() method
const fillterArray = [1, 2, 3, 4, 5, 6]
const evenNum = fillterArray.filter(isEven) // Call function inside filter() method as a parameter and assign to evenNum variable
// Create function isEven and return parameter
function isEven(value) {
    return value % 2 === 0
}
//console.log(evenNum)

const people = [
    {
        name : 'test01', 
        value : 20
    }, 
    {
        name : 'test02', 
        value : 24
    }, 
    {
        name : 'test03', 
        value : 30
    }, 
    {
        name : 'test04', 
        value : 32.5
    }
]
//console.log(people)
const findPeople = people.filter(people => people.value > 30)
//console.log(findPeople)

// using filter() and indexOf() remove duplicate array
const numberArray = [1, 2, 3, 4, 2, 5, 4, 6, 5, 8, 7, 8, 8, 9, 10]

const removeDuplicateArray = numberArray.filter((value, index, arr) => {
    return arr.indexOf(value) === index

    //console.log('condition : ', arr.indexOf(index))
    //console.log('check value : ', value)
    //console.log('Break');

    //console.log('Value', value);
    //console.log('Index', index);
    //console.log('Array', arr);
})
console.log(removeDuplicateArray);
