/* 
Notes
*/
// In JavaScript have two types of data 01.Primitive, 02.Reference (Non Primitive)

// In Primitive DataTypes
// Their have 7 types : 01.String, 02.Number, 03.Boolean, 04.Null, 05.Undefined, 06.Symbol, 07.Bigint 

// Primitive DataTypes Symbol Example
const userId = Symbol('123')
const teacherId = Symbol('123')
console.log(userId);
console.log(teacherId);
console.log(userId == teacherId);
console.log(userId === teacherId);
// Primitive DataTypes Bigint Example
const bigNumber = 2567892448775620n;
console.log(bigNumber);
console.log(typeof bigNumber);


// In Reference (Non Primitive)
// Their have mainly 3 types : 01.Array, 02.Objects, 03.Functions

// Array Example
let ourCities = ['Kolkata', 'Jaipur', 'Delhi'];
console.log(ourCities);

// Objects Example
let myDescription = {
    name : 'Suvendu',
    age : 22,
    Gender : 'Male'
}
console.log(myDescription);

// Functions Example
// function(){} (This is function)
// Function assign to variable
const testFunc01 = function(){
    console.log('Hello World');
}
console.log(testFunc01);

const strValue01 =  "Suvendu";
const strValueIsConvert = strValue01.substring(0, 5);
console.log(strValueIsConvert);

// Concat
const arr01 = ["ouais ouais", "nan nan"];
const arr02 = ["generation", "nan nan"];
const arr03 = arr01.concat(arr02);
console.log(arr03);

/*
JavaScript Memory management
In JavaScript have two types of Memory 01.Stack (Primitive) 02.Heap (Reference (Non Primitive))
*/

// Using Primitive data type value is not updated for both variables
const user01 = "Babu";
let user02 = user01;
user02 = "Suvendu";
console.log(user01);
console.log(user02);

// Using Reference (Non Primitive) data type value is updated for both variables
const obj01 = {
    name: "PURE",
    email: "pure@gmail.com"
}
let obj02 = obj01;
obj02.name = "Suvendu";
console.log(obj01);
console.log(obj02);