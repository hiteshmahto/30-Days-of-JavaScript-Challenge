// Activity 2: Function Expression

// Task 3: Write a function expression to find the maximum of two numbers and log the result to the console
const findMax = function (num1, num2) {
  if (typeof num1 === "number" && typeof num2 === "number") {
    if (num1 > num2) {
      console.log(`${num1} is greater!`);
    } else if (num1 < num2) {
      console.log(`${num2} is greater!`);
    } else {
      console.log(`Both are Equal!`);
    }
  } else {
    console.log("Please pass 2 number's in argument!");
  }
};

findMax(3, -7); // 3 is greater!
findMax("hello", 23); // Please pass 2 number's in argument!
findMax(); // Please pass 2 number's in argument!

// Task 4: Write a function expression to concatenate two strings and return the result
const concatenateStrings = function (str1, str2) {
  if (typeof str1 === "string" && typeof str2 === "string") {
    return `${str1} ${str2}`;
  }
  return `Please pass 2 string's in argument!!`;
};
console.log(concatenateStrings("Hitesh", "Mahto")); // Hitesh Mahto
console.log(concatenateStrings()); // Please pass 2 string's in argument!!
console.log(concatenateStrings(12, null)); // Please pass 2 string's in argument!!
