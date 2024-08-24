// Conditional Operetor
/*const todayTemperature = 50.5
if (todayTemperature <= 50) {
    console.log('Temperature less then 50')
} else {
    console.log('Temperature getter then 50');
}*/

// Implicit Scope in Javascript (Means javascript assume that their have a scope but for use "Implicit Scope / Single Line" code must be end line using ";/semi-clone")
// Implicit Scope Example
const balance = 749
//if (balance > 500)console.log("Congratulations you have enough balnce to purchase share"), console.log('Test 02');
//console.log("You have insufficient balance to purchase item");

// If/Else if/Else
/*if(balance < 500){
    console.log('Your balance is 500')
}else if(balance < 750){
    console.log('Your balance is 750')
}else {
    console.log('Your balance is 1000')
}*/

// Switch Case
const month = "March"
const Invalid = "Undefined"

// Here key is what you want to check, like "month"
// here value is assign key means variable month is "March" or not
// Then set your statement
/*switch (key) {
    case value:
        
        break;

    default:
        break;
}*/

switch(month){
    case "January":
        // Statement
        console.log(`Current month is ${month}`);
        break;
    case "February":
        // Statement
        console.log(`Current month is ${month}`);
        break;
    case "March":
        // Statement
        console.log(`Current month is ${month}`);
        break;
    case "April":
        // Statement
        console.log(`Current month is ${month}`);
        break;

    default:
        // Statement
        console.log(`Current month is ${Invalid}`);
        break;
}