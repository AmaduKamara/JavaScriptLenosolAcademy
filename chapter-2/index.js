// ELSE IF STATEMENT
let grade = 0;

if (grade >= 90) {
  console.log(`You got A+`);
} else if (grade >= 80) {
  console.log(`You scored B+`);
} else if (grade >= 70) {
  console.log(`You scored C+`);
} else if (grade >= 60) {
  console.log(`You score C`);
} else {
  console.log(`You got F`);
}

// EXERCISE
// Using the Else If statement, write a program that checks which day in the week the user enters and tell them the day in the console log.

let day = 1;

if (day === 1) {
  console.log("Sunday");
} else if (day === 2) {
  console.log("Monday");
} else if (day === 3) {
  console.log("Tuesday");
} else if (day === 4) {
  console.log("Wednesday");
} else if (day === 5) {
  console.log("Thursday");
} else if (day === 6) {
  console.log("Saturday");
} else if (day === 7) {
  console.log("Sunday");
} else {
  console.log("Day not valid");
}
