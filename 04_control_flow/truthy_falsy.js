// Check condition using Truthy / Falsy value
const userEmail = function(){}

// Condition
if(userEmail){
    console.log('Got user e-mail')
}else {
    console.log("Don't have user e-mail")
}

// Falsy Value
/*
01. false => false is "Falsy" value
02. 0 => Zero(0) is "Falsy" value
03. -0 => Minus zero(-0) is "Falsy" value
04. BigInt 0n => "BigInt 0n" is "Falsy" value
05. "" => empty string is "Falsy" value
06. null => null is "Falsy" value
07. undefined => undefined is "Falsy" value
08. NaN => NaN is "Falsy" value
*/

// Truthy Value
/* 
01. "0" => If inside semiclone have zero then it's also truthy value
02. "false" => Inside data type string all are truthy value
03. " " => If inside semiclone have a space it's also truthy value
04. []/{} => Empty array/object is also truthy value
05. function(){} => Empty function is also truthy value
06. 
07. 
08. 
*/

// How to check empty object
const emptyOBJ = {}
//console.log(Object.keys(emptyOBJ))

// Here using Object.keys return an array, and then check return array length and type === 0 or not
if(Object.keys(emptyOBJ).length === 0){
    console.log('Object is empty')
}