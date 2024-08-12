const laptopName = new String("My-Laptop"); //Using new String() method we convert string to object
//console.log(laptopName[0]);
//console.log(laptopName__proto__); 
//console.log(laptopName.length);
//console.log(laptopName.charAt(2)); // Using charAt() method set index value and get string of charecter in index 2 
//console.log(laptopName.toUpperCase()); // Using toUpperCase() method modify string value to upper case
//console.log(laptopName.indexOf('L')); // Using indexOf() method get index value of specific letter
const newLaptopName = laptopName.substring(0, 8); // Using substring() method get string value using 'start index' and 'end index'
//console.log(newLaptopName); 
const anotherLaptopName = laptopName.slice(-9, 6); //Using slice() method get value of string and it's also support negative value
//console.log(laptopName.slice(-8, 4)); //Using slice() method get value of string and it's also support negative value
const anotherLaptopNameTrim = "    Asus    ";
//console.log(anotherLaptopNameTrim);
//console.log(anotherLaptopNameTrim.trim()); // Using trim() method we remove extra space of string

const my_url =  "https://demo.com/demo%20check"
const my_url_modify = my_url.replace('%20', '-'); // Using replace method() we check and remove mention string value as set first inside replace() method and 2nd one which print after replace
//console.log(my_url_modify);
//console.log(my_url.includes('hi')); // Using includes() method we check that perticular string value is have inside another string or not
console.log(laptopName.split('-')); // Using split() method we can convert string to array, but it's based on here '-', but it will be any thing else also