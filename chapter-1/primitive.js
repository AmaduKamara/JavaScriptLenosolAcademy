// Numbers in JS
console.log(2 + 4); // 6
console.log(2 * 6); // 12
console.log(26 - 7); // 19
console.log(26 / 2); // 13
console.log(7 % 2); // 1

// Number variables
let age = 23;
let anyNumber = 2;
let boolRes = age - anyNumber;
let res = boolRes > 25;
console.log("----------------");

console.log(res);

// Checking Type of a Variable
console.log(typeof res);
console.log(typeof boolRes);
console.log(typeof age);

// Number Variable Exercise 1
// 1. Create two variables and assign them a number type.
// 2. Using the greater than, asign the value of the first variable greater than the second variable to a boolVal variable
// 3. Print the boolVal variable
let firstNum = 23;
let secondNum = 45;
let boolVal = firstNum > secondNum;
console.log(boolVal);

// Difference between let and const 
// Update variable value
let ageVal = 34
console.log(ageVal) // 34

// Rename a variable
ageVal = 40
console.log(ageVal) // 40

// Const
const taxRate = 0.7
console.log(taxRate) // 0.6

// taxRate = 0.9
console.log(taxRate)