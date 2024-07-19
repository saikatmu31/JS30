const isEven = (num) => {
	return num % 2 == 0;
};
const randomNumber = Math.floor(Math.random() * 100);

isEven(randomNumber)
	? console.log(`${randomNumber} is even`)
	: console.log(`${randomNumber} is Odd`);

const squareNumber = (num) => {
	return num * num;
};
console.log(`${squareNumber(randomNumber)} is square of ${randomNumber}`);

const concatStrings = (str1, str2) => {
	return str1 + str2;
};
function greatestNumber(num1, num2) {
	if (num1 < num2) {
		console.log(num2 + " is greater than " + num1);
	} else {
		console.log(num1 + " is greater than " + num2);
	}
}
console.log(concatStrings("Hello ", "Saikat"));
greatestNumber(10, 100);
greatestNumber(101, 11);

const sumOfTwo = (num1, num2) => {
	return num1 + num2;
};
console.log(`Sum of two: ${sumOfTwo(5, 6)}`);

const inString = (str, word) => {
	return str.includes(word);
};

console.log(`Hitesh has H in it : ${inString("Hitesh", "H")}`);
