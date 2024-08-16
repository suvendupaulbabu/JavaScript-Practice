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
//console.log(obj3);

// Array of Object
const arrOBJ = [
    {
        id: 1,
        email: "test01@gmail.com", 
        isLoggedIN : false
    }, 
    {
        id: 2,
        email: "test02@gmail.com", 
        isLoggedIN : false
    },
    {
        id: 3,
        email: "test03@gmail.com", 
        isLoggedIN : true
    }
]

const fetchArrObj = arrOBJ.map((item) =>{
    //console.log(item);
    //console.log(Object.keys(item));
    //console.log(Object.values(item));
    //console.log(Object.values(item).length);
    console.log(Object.entries(item));
})

//console.log(arrOBJ[0]);
//console.log(Object.keys(arrOBJ[0]));
//console.log(Object.values(arrOBJ[0]));
//console.log(Object.hasOwn(arrOBJ[0], 'isLoggedIN'))
//console.log(arrOBJ[0].hasOwnProperty('isLoggedIN'))