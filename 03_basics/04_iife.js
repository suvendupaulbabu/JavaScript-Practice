// Immediately Invoked Function Expressions (IIFE)
// For stop global scope polution use IIFE function (*Example of IIFE)
(function sampleIIFE(){
    // It's a named IIFE, because above function have a name so it's called named IIFE
    //console.log('Hello user')
})();

// IIFE using arrow function (* Note use iife need to end first block of code using "semi-clone", other wise it's through error)
// Here (name) is a argument
// Here ("PUER") is a execute function
( (name) => {
    //console.log(`Another user ${name}`)    
} )("PUER");


// JavaScript Execution Context

// Mostly 3 type of execution context have in javascript
/* 
 01. Global Execution Context => Like in browser it's have 'window' which we access usng 'this' keyword
 02. Function Execution Context =>
 03. Eval Execution Context =>
*/
const arrfunc01 = () => {
    //console.log(myVar)
}
const arrfunc02 = () => {
    let myVar = 20
    arrfunc01()
}
let myVar = 10
arrfunc02()

// Howe to Run below code in browser
let val01 = 10
let val02 = 5
const addNum = (num1, num2) => {
    const total = num1 + num2
    return total
}
let result01 = addNum(val01, val02)
let result02 = addNum(5, 9)

//console.log(result01)
//console.log(result02)

/* 
-------------------------------
01. Global Execution => this
-------------------------------
02. Memory Creation Phase : 
ii.  val01 => undefine
iii. val02 => undefine
iv.  addNum() => defination
v.   result01 => undefine
vi.  result02 => undefine
-------------------------------
03. Execution Phase : 
i.   val01 = 10
ii.  val01 = 5
iii. addNum = hold
iv.  result01 => create new execution context, because when result01 call then it check that it have a function so it's create a new execution phase and inside their it's create (i) new variable envirment + (ii) Execution thread. And when called each function same process will happen
v.   result02 => create new execution context, because when result01 call then it check that it have a function so it's create a new execution phase and inside their it's create (i) new variable envirment + (ii) Execution thread. And when called each function same process will happen
-------------------------------
*** Note : Lifo => In execution label in have nested function like function one(){function two(){function three(){console.log('Hello')}}}, then first go global execution box function one(), then function two() and last function three(), and when these function are exit this box then first move three(), two() and last first() function, it's called "Last in First Out"

*/


// ./Howe to Run below code in browser