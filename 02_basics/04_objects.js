const tinder = new Object(); // singleton object

/*const tinder = {
    fullName : {
        userFullName : {
            firstName : "Suvendu", 
            lastName : "Paul"
        }
    }
}*/

tinder.fullName = {
    userFullName : {
        firstName : "Suvendu", 
        lastName : "Paul"
    }
}
tinder.email = "some@gmail.com"
tinder.isLoggedIn = false
tinder.address = "kolkata"

//console.log(tinder);

// Object Channing
const obj1 = {1: "a", 2: "b"}
const obj2 = {3: "c", 4: "d"}
//const obj3 = {...obj1, ...obj2} // Asign multiple object in one object using "spread" oparetor
const obj3 = Object.assign({}, obj1, obj2) // Using Object.assign() method first curly bracket{} is "target" and object name is source
console.log(obj3);