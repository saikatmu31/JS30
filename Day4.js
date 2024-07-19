// **Activity 1: For Loop**

console.log("=== Activity 1: For Loop ===");

// Task 1: Print Numbers from 1 to 10
console.log("### Task 1: Print Numbers from 1 to 10 ###");
for (let i = 1; i <= 10; i++) {
	console.log(i);
}

// Task 2: Multiplication Table of 5
console.log("\n### Task 2: Multiplication Table of 5 ###");
for (let i = 1; i <= 10; i++) {
	console.log(`5 X ${i} = ${i * 5}`);
}

// **Activity 2: While Loop**

console.log("\n=== Activity 2: While Loop ===");

// Task 3: Sum of Numbers from 1 to 10
console.log("### Task 3: Sum of Numbers from 1 to 10 ###");
let j = 1;
let sum = 0;
while (j <= 10) {
	sum += j;
	j++;
}
console.log(`${sum} is the Sum from 1-10`);

// Task 4: Print Numbers from 10 to 1
console.log("\n### Task 4: Print Numbers from 10 to 1 ###");
let startValue = 10;
while (startValue >= 1) {
	console.log(startValue);
	startValue--;
}

// **Activity 3: Do... While Loop**

console.log("\n=== Activity 3: Do... While Loop ===");

// Task 5: Print Numbers from 1 to 10
console.log("### Task 5: Print Numbers from 1 to 10 ###");
let anotherStartValue = 1;
do {
	console.log(anotherStartValue);
	anotherStartValue++;
} while (anotherStartValue <= 10);

// Task 6: Calculate Factorial of 5
console.log("\n### Task 6: Calculate Factorial of 5 ###");
let factorialNumber = 5;
let factorialValue = 1;
const temp = factorialNumber;
do {
	factorialValue *= factorialNumber;
	factorialNumber--;
} while (factorialNumber > 0);
console.log(`Factorial of ${temp}! is ${factorialValue}`);

// **Activity 4: Nested Loops**

console.log("\n=== Activity 4: Nested Loops ===");

// Task 7: Print a Pattern Using Nested Loops
console.log("### Task 7: Print a Pattern Using Nested Loops ###");
for (let i = 0; i < 5; i++) {
	console.log("* ".repeat(i + 1));
}

// **Activity 5: Loop Control Statements**

console.log("\n=== Activity 5: Loop Control Statements ===");

// Task 8: Skip Number 5 Using Continue
console.log("### Task 8: Skip Number 5 Using Continue ###");
for (let i = 1; i <= 10; i++) {
	if (i === 5) continue;
	console.log(i);
}

// Task 9: Stop at Number 7 Using Break
console.log("\n### Task 9: Stop at Number 7 Using Break ###");
for (let i = 1; i <= 10; i++) {
	if (i === 7) break;
	console.log(i);
}
