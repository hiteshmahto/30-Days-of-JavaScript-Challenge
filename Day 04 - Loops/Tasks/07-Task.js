/*
Activity 4: Nested Loops

Task 7: WAP to print a pattern using nested for loops
*
* *
* * *
* * * *
* * * * *
*/

const rows = 5;
for (let i = 1; i <= rows; i++) {
  let row = "";
  for (let j = 1; j <= i; j++) {
    row += "* ";
  }
  console.log(row);
}
