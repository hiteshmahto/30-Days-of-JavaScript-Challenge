// Activity 5: Combining Conditions

// Task 7: WAP to check if a year is a leap year using multiple conditions (divisible by 4, but not 100 unless also divisible by 400) and log the result to the console

const year = 1900;

if (year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)) {
  console.log(`${year} is a Leap Year!!`);
} else {
  console.log(`${year} is NOT a Leap Year!!`);
}

// We can do this question using ternary operator also

console.log(
  year % 400 === 0 || (year % 4 === 0 && year % 100 !== 0)
    ? `${year} is a Leap Year!!`
    : `${year} is NOT a Leap Year!!`
);
