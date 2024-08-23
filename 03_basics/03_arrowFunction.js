// Create Method() => Inside object if create function then it's called method
const user = {
    userName : 'PUER', 
    price : 999, 
    welcomeMSG: function userPrint(){
        //console.log(`${this.userName} set their budget for 2024 $${this.price}`)
        //console.log(this) // Inside function this keyword return current context / block scope value      
    }
}

user.welcomeMSG()
user.price = "1000"
user.welcomeMSG()

//console.log(this) // But here this keyword return empty object *** Note => But if same this keyword print in browser then it's return global object which is "window" because of browser engine

// Anothor function
//function checkingThis(){
    //const userName = 'PUER'
    //console.log(this.userName) // Can't call "this" keyword inside function, then it's return "undefined". "this" keyword able to called inside object
//}
//checkingThis()

// Function Expression Example (If function assign to any variable then it's called function expression)
//const checkingThis = function(){
    //const userName = 'PUER'
    //console.log(this.userName) // Can't call "this" keyword inside function, then it's return "undefined". "this" keyword able to called inside object
    //console.log('Normal function', this)
//}
//checkingThis()

// Arrow Function (ES-6)
// let arrowFunc = (num1, num2) => num1 + num2 // If function have single statement then no need to return and it's called "implicit return"
// let arrowFunc = (num1, num2) => (num1 + num2) // If function have single statement then no need to return and it's called "implicit return"
// let arrowFunc = (num1, num2) => ({userName : "PUER"}) // If need to return object in function statement then must be call object inside "parentheses()" other wise it's return "undefined"
// In above both function are same, if function statement called inside "curly Brackets {}" then must use "return" keyword but if function statement not wrap with "curly Brackets {}" then no need to use return also if function statement called inside "parentheses()" then also no need to use "return" keyword

//let arrowFunc = (num1, num2) => {
    //console.log('Arrow function', this)
   // return num1 + num2 // It's also called "explicit return"
//}

console.log(arrowFunc(2, 6))