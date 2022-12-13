// let firstName = "Tuser";
// let age = 23;
// console.log(firstName);
// console.log(age);

// Data Types
// 1. Object
// 2. Primitive

// Primitive
// 1. Number
// 2. String
// 3. Boolean
// 4. Undefined
// 5. Null
// 6. Symbol //later
// 7. BigInt // later

// Number
let myNumber = 774;
console.log(myNumber);
let myNumber2 = 774.88;
console.log(myNumber2);

// String
let myName = "Tuser Debnath";
console.log(myName);
let myWord = "Bangladesh is my Motherland";
console.log(myWord);

// Boolean
let isWorld = true;
console.log(isWorld);
let isWorld2 = false;
console.log(isWorld2);

// Undefined
let myContent;
console.log(myContent);

// Null
let text = null;
console.log(text);

// Type of Data
console.log(typeof myNumber);
console.log(typeof myName);
console.log(typeof isWorld);
console.log(typeof myContent);
console.log(typeof text); // JavaScript Bug

// Undefined Variables Value Assign
console.log(myContent);
console.log(typeof myContent);
myContent = "I Love My Country";
console.log(myContent);
console.log(typeof myContent);

// Value Changes
console.log(isWorld);
console.log(typeof isWorld);
isWorld = "Beautiful";
console.log(isWorld);
console.log(typeof isWorld);

// Variable Declearation
/* 
1. let // we will use it where we need to change the variable value
2. const // we will use it where variable value is constant
3. var // we will avoid it
*/

// JavaScript Operator

// Arithmetic Operators
// Assignment Operators
// Comparison Operators
// Logical Operators
// Conditional Operators
// Type Operators

// Arithmetic Operator
// +
// -
// *
// /
// **
// ++
// --

console.log(3 + 2); // Addition
console.log(3 - 2); // Subtraction
console.log(3 * 2); // Multiplication
console.log(3 / 2); // Division
console.log(3 ** 3); //Exponentiation
console.log(3 % 2); // Modulus

let x = 10; // Increment
x++;
console.log(x);

let y = 20; // Decrement
y--;
console.log(y);

// Arithmectic Operation Using Variable

let currentYear = 2022;
let myBirthyear = 1999;
let pritomBirthYear = 2010;

console.log(currentYear - myBirthyear);

let ageDiff = pritomBirthYear - myBirthyear;
console.log(ageDiff);

// Adding Two Variables Value

let nameOne = "Tuser";
let nameTwo = "Debnath";

// console.log(nameOne, nameTwo);
console.log(nameOne + " " + nameTwo);

// Assignment Operators
// =
// +=
// -=
// *=
// /=

let item = 10 + 5;
console.log(item);

let a = 15;
a += 5;
console.log(a);

let b = 15;
b -= 5;
console.log(b);

let c = 15;
c *= 5;
console.log(c);

let d = 15;
d /= 5;
console.log(d);
