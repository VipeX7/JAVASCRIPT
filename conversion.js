let score = "33";
console.log(typeof score); // number
console.log(typeof(score)); // undefined, typo in 'typeof'

let valueInNumber = Number(score);
console.log(typeof valueInNumber); // number 

// *******OPERATIONS********

let value = 3
let negvalue = -value
console.log(negvalue); // -3

let str1= "Hello";
let str2 = " Parth";
console.log(str1 + str2); // Hello Parth

console.log("1" + 2); // "12" (string concatenation
console.log(1 + "2"); // "12" (string concatenation
console.log("1" + 2 + 2); // "122" (string concatenation)
console.log(1 +2+ "2"); // -1 (string converted to number)b