const myArr = [0, 1, 2, 3, 4, 5]
const myCities = ["Barasat", "Madhyamgram"]

const myArr2 = new Array(1, 2, 3, 4)
//console.log(myArr[0]);

// Array methods
//myArr.push(6) // Using push() method insert an element in the array (It's insert last element in an array)
//myArr.pop() // Remove last element from array
//myArr.unshift(9) // Using unshift() method insert element at the first an array
//myArr.shift() // Using shift() method remove array element from 1st an array

//console.log(myArr.includes(9)); // Uaing includes() method return true/false based on search in an array elements
//console.log(myArr.indexOf(5)); // It's return index value of an array but if mention value/element is not find then it's return -1

//const newArray = myArr.join() // Using join() method convert and bind array to string
//console.log(newArray);
//console.log(typeof newArray);

// slice, splice


const myNewArr1 = myArr.slice(1, 3) // slice() method working two value, first one is set from array index and 2nd one up-to end index, like myArr 1st index have 0 2nd index have and 4th have 3
//console.log("A", myArr)
//console.log("B", myArr);

console.log("Original Array", myArr)

console.log('slice', myNewArr1)
console.log("B", myArr)

const myNewArr2 = myArr.splice(1, 3)
console.log('splice', myNewArr2)
console.log("C", myArr)