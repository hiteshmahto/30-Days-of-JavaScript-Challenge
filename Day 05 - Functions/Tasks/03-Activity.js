// Activity 3: Arrow Function

// Task 5: Write an arrow function to calculate the sum of two numbers and return the result
const sum = (num1, num2) =>
  typeof num1 === "number" && typeof num2 === "number"
    ? num1 + num2
    : "Please pass 2 number's in argument!!";

console.log(sum(20, 55)); // 75
console.log(sum()); // Please pass 2 number's in argument!!
console.log(sum(23)); // Please pass 2 number's in argument!!
console.log(sum("23", "hello")); // Please pass 2 number's in argument!!

// Task 6: Write an arrow function to check if a string contains a specific character and return a boolean value
const checkCharacter = (string, character) =>
  string ? string.includes(character) : "Pass a string!";

console.log(checkCharacter("hitesh", "i")); // true
console.log(checkCharacter("hitesh", "x")); // false
console.log(checkCharacter("hitesh")); // false
console.log(checkCharacter()); // Pass a string!
