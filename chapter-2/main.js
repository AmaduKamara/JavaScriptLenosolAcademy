// Nested If Statement
// Student Grade Distinction Checker
let grade = 92;

// if (grade >= 50) {
//   console.log("Congratulations, you passed.");

//   if (grade >= 90) {
//     console.log("You passed with distinction");
//   } else {
//     console.log("You did not pass with distinction");
//   }
// } else {
//   console.log("Sorry, you failed. Please retake the exam.");
// }

// EXERCISE 1
/*
  Mamy Fatu sells cakes and said whoever buys cakes worth Le10,000 is given 10% discount.
  1. Write a program that takes total price of cakes input from the user
  2. Check if the total price of cakes bought exceeds 10,000
  3. If the price exceeds, give them 10% discount in words. Eg... "You won 10% discount. Thank you for doing business with us."
  4. If not met, just print "Thank you for doing business with us."
  5. Mamy Fatu is so generous to all her customers who buys products worth Le20,000 and above and offer delivery service to them if total price exceeds. If not exceed 20,000, let them tknow they are not eligible for delivery.

  Question: Using Nested if statement, write a JS program that not only gives discount, but also gives delivery if one has discount and exceeds 20,000. If the person has discount but not eligible for delivery, inform them about it.
*/

console.log("****************************")

// let totalCakePrice = 12000;

// if (totalCakePrice >= 10000) {
//   console.log(`You won 10% discount. Thank you for doing business with us.`);

//   if(totalCakePrice >= 20000){
//     console.log(`You are entitled to delivery of your cakes`)
//   } else {
//     console.log(`Sorry, no delivery for the amount of cakes bought`)
//   }
// } else {
//   console.log(`Thank you for doing business with us.`);
// }

// EXERCISE 2
// Create a JS app that takes someone's email and password to log them into the app. 
  // i. If the email of the user is not admin@lenosol.com, just welcoem the user to their account
  // ii. If the email is admin@lenosol.com, State their admin status and if not an admin, display they are not an admin
  // iii. If the password is not equal to 123456 for anyone who tries to log in, print "Wrong Credentials"

// Using Nested If statement, design the app that does all the instructions above

// SOLUTION
let email = "sento@lenosol.com"
let password = 123455

if(email !== "admin@lenosol.com" || password === 123456){
  console.log(`Welcome User: ${email}`)

  if(email === "admin@lenosol.com"){
    console.log(`Welcome Admin: ${email}`)
  } else {
    console.log(`You are not an Admin`)
  }
} else {
  console.log(`Wrong credentials!!!`)
}