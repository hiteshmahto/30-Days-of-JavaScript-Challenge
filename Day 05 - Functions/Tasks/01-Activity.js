// Activity 1: Function Declaration

// Task 1: Write a function to check if a number is even or odd and log the result to the console
function evenOdd(number) {
  if (typeof number === "number") {
    console.log(number % 2 == 0 ? "Even!" : "Odd!");
    return;
  }
  console.log("Please pass number as an argument!");
}

evenOdd(23); // Odd!
evenOdd(94); // Even!
evenOdd(); // Please pass number as an argument!
evenOdd("hitesh"); // Please pass number as an argument!

// Task 2: Write a function to calculate the square of a number and return the result
function calculateSquare(number) {
  if (typeof number === "number") {
    return number * number;
  }
  return "Please pass number as an argument!";
}

console.log(calculateSquare(19)); // 361
console.log(calculateSquare()); // Please pass number as an argument!
console.log(calculateSquare("hello")); // Please pass number as an argument!
