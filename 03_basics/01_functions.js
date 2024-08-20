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
//console.log(loginUserMSG("Suvendu Paul"))

// Function with rest oparetor (...)
//const priceARR = [200, 500, 600, 45]
// function getCartPrice(num1, num2, ...cartPrice){
//     return num1, num2, cartPrice
// }
function getCartPrice(...cartPrice){
    return cartPrice
}
const totalPriceOfCart = getCartPrice(200, 500, 600, 45, 99.25)
//console.log(totalPriceOfCart)

// Pass object reference to the function
const mySym = Symbol("key1");
const jsUser = {
    name : "PUER", 
    prices : 99, 
    "full name" : "Brand Nourish PUER", 
    [mySym] : "myKey2", 
    age : 18, 
    location : "kolkata", 
    email : "puer@brandnourish.in", 
    isLoggedIn : false, 
    lastLoginDays : ["Mondal", "Saturday"]
}

console.log(typeof jsUser === "object")

function getUser(anyObject, objKey){
    //console.log(`User name is ${anyObject.name} and price is ${anyObject.price}`) 

    //return `User name is ${anyObject.name} and price is ${anyObject.price}`

    console.log('OBJ : ', anyObject)
    //console.log('OBJ Key : ', anyObject.map(objKey))
    
    return typeof anyObject === 'object' && anyObject !== null ? `User name is ${anyObject.name} and price is ${anyObject.price}` : ''
}
console.log(getUser(jsUser))

// Pass array reference to the function
const myArr = [1, 2, 3, 5, 8]
function getArr(...anyArray){
    return anyArray[0]
}
console.log(getArr(myArr))