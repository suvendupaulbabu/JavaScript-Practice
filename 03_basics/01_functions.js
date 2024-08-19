// Function
function myName(){
    //console.log("Suvendu");
    //console.log("Paul");
}
// Here above function reference is function name, like "myName"
// Here above function execution is function parentheses, like "()"
// When create function and inside parentheses () wharever passed it's call "parameter", like function addTwoNumbers(num1, num2){}. Here "num1", and "num2" is a "parameter"
// When function called and inside inside "parentheses" wharever passed it's call "argument", like addTwoNumbers(2, 4)
myName()

function addTwoNumbers(num1, num2){
    return num1 + num2
}
const resultTwoNum = addTwoNumbers(5, 9) // Here inside parentheses whatever write it's called "argument"
//console.log("Result", resultTwoNum)

// Another function()
// const userLoggedIN = true
// function loginUserMSG(){
//     userLoggedIN == true ? console.log('You successfully logged in') : console.log('Please log in')
// }
// console.log(loginUserMSG());

const userLoggedStatus = false
function loginUserMSG(userName){
    let userLoggedIN = userLoggedStatus === true ? `${userName} logged in` : `${userName} logged out`
    //return `${userName} logged in`
    return userLoggedIN
}
console.log(loginUserMSG("Suvendu Paul"))