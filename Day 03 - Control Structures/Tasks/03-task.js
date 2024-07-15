// Activity 2: Nested If-else statements

// Task 3: WAP to find the largest of three numbers using nested if-else statements

const num1 = -28;
const num2 = 14;
const num3 = 92;

if ((num1 === num2) === num3) {
  console.log(`All numbers are EQUAL!`);
} else {
  if (num1 > num2) {
    if (num1 > num3) {
      console.log(`${num1} is Largest Number!`);
    } else {
      console.log(`${num3} is Largest Number!`);
    }
  } else {
    if (num2 > num3) {
      console.log(`${num2} is Largest Number!`);
    } else {
      console.log(`${num3} is Largest Number!`);
    }
  }
}
