#!/usr/bin/env node
import inquirer from "inquirer";

console.log(`\n-- Welcome to the Command Line Calculator App --`);
console.log(`\n\t"Here math meets simplicity!"`);
console.log(`_________________________________________________\n`);

const answer = await inquirer.prompt([
  { message: "Enter the first number:", type: "number", name: "firstNumber" },
  { message: "Enter the second number:", type: "number", name: "secondNumber" },
  {
    message: "Choose an operator (+, -, *, /):",
    type: "list",
    name: "operator",
    choices: [
      "Addition (+)",
      "Subtraction (-)",
      "Multiplication (*)",
      "Division (/)",
    ],
  },
]);

// Destructuring
const { firstNumber, secondNumber, operator } = answer;

// Result
let output: number | undefined;

if (operator === "Addition (+)") {
  output = firstNumber + secondNumber;
} else if (operator === "Subtraction (-)") {
  output = firstNumber - secondNumber;
} else if (operator === "Multiplication (*)") {
  output = firstNumber * secondNumber;
} else if (operator === "Division (/)") {
  if (secondNumber === 0) {
    console.log("*Error: Cannot divide by zero!");
  } else {
    output = firstNumber / secondNumber;
  }
} else {
  console.log("*Error: Invalid Operator!");
}

console.log("---------------------------------");
console.log(`O U T P U T: ${output}`);
console.log("---------------------------------");
