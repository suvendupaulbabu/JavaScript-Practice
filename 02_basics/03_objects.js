// singleton (When object create by constractor then it's called "singleton")
// example Object.create() => This is called create object by constractor method

// Object literals
const mySym = Symbol("key1");

const jsUser = {
    name : "PUER", 
    "full name" : "Brand Nourish PUER", 
    [mySym] : "myKey2", 
    age : 18, 
    location : "kolkata", 
    email : "puer@brandnourish.in", 
    isLoggedIn : false, 
    lastLoginDays : ["Mondal", "Saturday"]
}
jsUser.greeting = function(){
    console.log(`Hello JS user ${this["full name"]}`);
}
console.log(jsUser.greeting());
//console.log(jsUser.greeting());


//jsUser.name = "Test"
//jsUser.email = "puer@brandnourish.com"
//Object.freeze(jsUser) // Using Object.freeze() method we freeze object after 1st update
//jsUser.name = "PUER Liquid Detergent"
//jsUser.email = "puer@mcnroe.in"

//console.log(jsUser['full name']);
//console.log(jsUser);
//console.log(jsUser.name);
//console.log(jsUser.email);
//console.log(jsUser["email"]); // If call object key pair value this way then always set key as a string like "email"
//console.log(jsUser[mySym]);
//console.log(typeof jsUser[mySym]);