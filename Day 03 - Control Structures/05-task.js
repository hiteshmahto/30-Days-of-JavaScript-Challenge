// Activity 3: Switch Case

// Task 5: WAP that uses a switch case to assign a grade ('A', 'B', 'C', 'D', 'F') based on a score and log the grade to the console

const marks = 82;
let grade = null;

switch (true) {
  case marks >= 90:
    grade = "A";
    break;

  case marks >= 80:
    grade = "B";
    break;

  case marks >= 70:
    grade = "C";
    break;

  case marks >= 60:
    grade = "D";
    break;

  case marks < 60:
    grade = "F";
    break;

  default:
    grade = "Invalid Marks";
}

console.log(grade);
