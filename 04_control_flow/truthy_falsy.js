// Check condition using Truthy / Falsy value
const userEmail = {}

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