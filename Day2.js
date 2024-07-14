const num1 = 100;
const num2 = 20;

// Arithmatic Operations

// Addition
const sum = num1 + num2;
console.log("Addition : ", sum);

// Subtraction
const substraction = num1 - num2;
console.log("Substraction : ", substraction);

// Multiplication
const mult = num1 * num2;
console.log("Multiplication : ", mult);

// Division
try {
	if (num2 == 0) {
		throw new Error("Invalid Input - Divide by Zero Error!");
	}
	div = num1 / num2;
	console.log("Division : ", div);
} catch (error) {
	console.log(error.message);
}

// Assignment Operators
let a = 5;
a += 2;
console.log("Incremented Value : ", a);
a -= 5;
console.log("Decremented Value : ", a);

// Comparison Operators

const requiredAge = 18;
const yourAge = 20;

if (yourAge < requiredAge) {
	console.log(`You are not a Voter!`);
}
if (yourAge > requiredAge) {
	console.log(`You are a Voter!`);
}

const number = 12;
const anotherNumber = 13;
if (number <= anotherNumber) {
	console.log(`${number} <= ${anotherNumber}`);
}
if (number >= anotherNumber) {
	console.log(`${number} <= ${anotherNumber}`);
}

console.log(true && true, "because both conditions are true.");
console.log(true && false, "because one condition is false.");
console.log(false && false, "because both conditions are false.");
console.log(true || true, "because at least one condition is true.");
console.log(true || false, "because at least one condition is true.");
console.log(false || false, "because both conditions are false.");

const randomNumber = 123;
const isPositive = randomNumber >= 0 ? "Positive" : "Negetive";
console.log(isPositive);
