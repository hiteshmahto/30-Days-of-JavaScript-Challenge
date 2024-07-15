// Activity 3: Switch Case

// Task 4: WAP that uses a switch case to determine the day of the week based on a number (1-7) and log the day name to the console

const dayNumber = 5;
let day = null;

switch (dayNumber) {
  case 1:
    day = "Monday";
    break;
  case 2:
    day = "Tuesday";
    break;
  case 3:
    day = "Wednesday";
    break;
  case 4:
    day = "Thursday";
    break;
  case 5:
    day = "Friday";
    break;
  case 6:
    day = "Saturday";
    break;
  case 7:
    day = "Sunday";
    break;
  default:
    day = "Invalid Day";
}

console.log(`${day}!`);
