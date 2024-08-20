// Variable Scope (block scope/global scope)
let a = 100
if(true){
    let a = 10
    const b = 20
    var c = 30
    //console.log('Inner', a)
}

//console.log('Outer', a)
//console.log('const', b)
//console.log('var', c)

// Function Scope
function one(){
    const userName = 'PUER'
    function two(){
        const age = 3
        console.log(userName)
    }
    two()
    //console.log(age)
}
console.log(one())

if(true){
    const userName = "Suvendu"
    if(true){
        const password = 123
        console.log(`Your name is ${userName} and password is ${password}`)
    }
    //console.log('Your passwod: ', password)
}
//console.log(userName)