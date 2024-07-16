// Activity 3: Do...While Loop

// Task 6: WAP to calculate the factorial of a number using a do...while loop

let factorial = 1;
let number = 8;
let i = number;

do {
  factorial *= i;
  i--;
} while (i >= 1);

console.log(`${number}! = ${factorial}`);
