/**
 * Let's play mini FizzBuzz! For any given number, if the number is:*/

// divisible by 3, print "Fizz".
//divisible by "5", print "Buzz".
//divisible by both 3 and 5, print "FizzBuzz".

//That is, if any of the above conditions apply, print the above words instead of the number.
//Otherwise, just print the number.

let num1 = 33;

if (num1 % (3 && 5) === 0) {
  console.log("divisible by 5/3", "FizzBuzz");
} else if (num1 % 3 === 0) {
  console.log("divisible by 3:", "Fizz");
} else if (num1 % 5 === 0) {
  console.log("divisible by 5:", "Buzz");
} else {
  console.log(num1);
}
