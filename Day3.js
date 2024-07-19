// **Activity 1: If-Else Statements**

console.log("=== Activity 1: If-Else Statements ===");

// Task 1: Number Check Script
// Generating a random number between -10 and 10
const randomNumber = (Math.random() - 0.5) * 20;
console.log(`Random Number: ${randomNumber}`);

if (randomNumber > 0) {
	console.log("Result: Positive Number");
} else if (randomNumber === 0) {
	console.log("Result: Zero");
} else {
	console.log("Result: Negative Number");
}

// **Activity 2: Nested If-Else Statements**

console.log("\n=== Activity 2: Nested If-Else Statements ===");

// Task 3: Find the Largest of Three Numbers
// Generating three random numbers
const [a, b, c] = [
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
	Math.floor(Math.random() * 100),
];
console.log(`A: ${a} B: ${b} C: ${c}`);

let maxNum = -9999;
if (a > b) {
	if (a > c) {
		console.log(`Max Number: A is the greatest (${a})`);
		maxNum = a;
	} else {
		console.log(`Max Number: C is the greatest (${c})`);
		maxNum = c;
	}
} else if (b > c) {
	if (b > a) {
		console.log(`Max Number: B is the greatest (${b})`);
		maxNum = b;
	} else {
		console.log(`Max Number: A is the greatest (${a})`);
		maxNum = a;
	}
} else if (c > a) {
	if (c > b) {
		console.log(`Max Number: C is the greatest (${c})`);
		maxNum = c;
	} else {
		console.log(`Max Number: B is the greatest (${b})`);
		maxNum = b;
	}
}
console.log(`Final Max Number: ${maxNum}`);

// **Activity 3: Switch Case**

console.log("\n=== Activity 3: Switch Case ===");

// Task 5: Day of the Week Script
// Generating a random number between 1 and 7
const weekDay = Math.floor(Math.random() * 7) + 1;
console.log(`Week Day Number: ${weekDay}`);

switch (weekDay) {
	case 1:
		console.log("Day: Sunday");
		break;
	case 2:
		console.log("Day: Monday");
		break;
	case 3:
		console.log("Day: Tuesday");
		break;
	case 4:
		console.log("Day: Wednesday");
		break;
	case 5:
		console.log("Day: Thursday");
		break;
	case 6:
		console.log("Day: Friday");
		break;
	case 7:
		console.log("Day: Saturday");
		break;
	default:
		console.log(`${weekDay} is Not a Proper Weekday`);
		break;
}

// Task 6: Grade Assignment Script
// Generating a random score between 0 and 100
const score = Math.floor(Math.random() * 100);
console.log(`Score: ${score}`);

switch (true) {
	case score >= 90:
		console.log("Grade: A");
		break;
	case score >= 80:
		console.log("Grade: B");
		break;
	case score >= 70:
		console.log("Grade: C");
		break;
	case score >= 60:
		console.log("Grade: D");
		break;
	default:
		console.log("Grade: F");
		break;
}

// **Activity 4: Conditional (Ternary) Operator**

console.log("\n=== Activity 4: Conditional (Ternary) Operator ===");

// Task 6: Even or Odd Check
// Generating a random number between 0 and 99
const number = Math.floor(Math.random() * 100);
console.log(`Number: ${number}`);

const result = number % 2 === 0 ? "Even" : "Odd";
console.log(`Result: ${result}`);

// **Activity 5: Combining Conditions**

console.log("\n=== Activity 5: Combining Conditions ===");

// Task 7: Leap Year Check Script
// Define a year to check
const year = 2024;
console.log(`Year: ${year}`);

// Check if the year is a leap year
if (year % 100 === 0) {
	if (year % 400 === 0) {
		console.log(`${year} is a Leap Year`);
	} else {
		console.log(`${year} is not a Leap Year`);
	}
} else {
	if (year % 4 === 0) {
		console.log(`${year} is a Leap Year`);
	} else {
		console.log(`${year} is not a Leap Year`);
	}
}
