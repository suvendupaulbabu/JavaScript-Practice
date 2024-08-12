// Create Date instance or object
const myDate = new Date()
//console.log(myDate.toString())
//console.log(myDate.toDateString())
//console.log(myDate.toISOString())
//console.log(myDate.toJSON())
//console.log(myDate.toLocaleDateString())
//console.log(myDate.toLocaleString())
//console.log(myDate.getHours())
//console.log(typeof myDate);

//let myCreatedDate = new Date(2023, 5, 20)
//let myCreatedDate = new Date(2023, 5, 20, 5, 4)
//let myCreatedDate = new Date("1986-05-20") //YY-MM-DD format
let myCreatedDate = new Date("05-20-1986") //MM-DD-YY format
//console.log(myCreatedDate.toDateString())
//console.log(myCreatedDate.toLocaleString())

let myTimeStamp = Date.now()
//console.log(myTimeStamp); // Get Seconds
//console.log(myCreatedDate.getTime()); // For get Time
//console.log(myTimeStamp/1000); // For get second
//console.log(Math.floor(myTimeStamp/1000)); // For get second in round figture

console.log(
    myTimeStamp.toLocaleString("Default", {
        weekday: "long"
    })
);