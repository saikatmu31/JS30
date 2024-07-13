# JavaScript Variable and Data Type Activities

This document covers a series of activities involving JavaScript variable declaration, data types, and constants.

## Activity 1: Variable Declaration

In this activity, we declare variables using var and let, and print their values to the console.

```javascript
// Declare a variable using var
var var1 = 5;
console.log("Var1: ", var1);

// Declare a variable using let
let var2 = "Chai Code Challenge";
console.log("We Love", var2);
```

## Explanation

- `var var1 = 5;: Declares a variable named var1 using var and assigns it the value 5.`
- `console.log("Var1: ", var1);// Prints the value of var1 to the console.`
- `let var2 = "Chai Code Challenge";// Declares a variable named var2 using let and assigns it the value "Chai Code Challenge".`
- `console.log("We Love", var2);
// Prints the string "We Love" followed by the value of var2 to the console.`

## Activity 2: Constant Declaration

In this activity, we declare a constant using const and print its value to the console.

```javascript
const var3 = true;
console.log(var3);
```

## Explanation

- `const var3 = true;: Declares a constant named var3 and assigns it the value true.`
- `console.log(var3);: Prints the value of var3 to the console.`

## Activity 3: Data Types

In this activity, we declare variables of different data types and print their types to the console.

```javascript
const numberType = 1;
const stringType = "Chai";
const booleanType = true;
const objectType = { type: "Challenge", instructor: "Hitesh Sir" };
const arrayType = [1, 2, 3];

console.log(
	`numberType: ${typeof numberType}\n stringType: ${typeof stringType}\n booleanType: ${typeof booleanType}\n objectType: ${typeof objectType}\n arrayType: ${typeof arrayType}`
);
```

## Explanation

- `const numberType = 1;: Declares a constant named numberType with the value 1.`
- `const stringType = "Chai";: Declares a constant named stringType with the value "Chai".`
- `const booleanType = true;: Declares a constant named booleanType with the value true.`
- `const objectType = { type: "Challenge", instructor: "Hitesh Sir" };: Declares a constant named objectType with an object as its value.`
- `const arrayType = [1, 2, 3];: Declares a constant named arrayType with an array as its value.`
- `console.log(...): Prints the types of the variables using typeof.`

## Activity 4: Mutable and Immutable Variables

In this activity, we demonstrate the difference between mutable and immutable variables.

```javascript
let newVariable = 5;
console.log(newVariable);
newVariable = 96;
console.log(newVariable);

const errorOccuringVariable = "Error here :-)";
/*
Uncommenting the line below will throw an error
errorOccuringVariable = "Here is the Mistake TypeError";
*/
```

## Explanation

- `let newVariable = 5;: Declares a variable named newVariable with the value 5.`
- `console.log(newVariable);: Prints the value of newVariable to the console.`
- `newVariable = 96;: Reassigns newVariable to the value 96.`
- `console.log(newVariable);: Prints the new value of newVariable to the console.`
- `const errorOccuringVariable = "Error here :-)";: Declares a constant named errorOccuringVariable with the value "Error here :-)".`
- `errorOccuringVariable = "Here is the Mistake TypeError";: Attempting to reassign errorOccuringVariable would throw a TypeError because constants cannot be reassigned.`

## Conclusion

This document demonstrates basic variable declaration using var, let, and const, along with examples of different data types and the immutability of constants in JavaScript. Understanding these fundamentals is crucial for writing effective and error-free JavaScript code.
