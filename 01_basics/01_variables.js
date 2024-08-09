// Using const not update variable value
const accountId = 144553;
var accountPassword = "12345";
let accountEmail = "pure@gmail.com";
accountCity = "Jaipur";
let accountState;

accountEmail = "suvendu@gmail.com";
accountPassword = "212121";
accountCity = "Kolkata";

/*
Prefered not use var keyword, because var keyword have issue in block scope {} and functional scope {}
*/

console.log(accountId);
console.table([accountEmail, accountPassword, accountCity, accountState]);
