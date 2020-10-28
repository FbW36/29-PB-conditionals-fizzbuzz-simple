// Let's play mini FizzBuzz! For any given number, if the number is:

// - divisible by 3, print "Fizz".
// - divisible by "5", print "Buzz".
// - divisible by both 3 and 5, print "FizzBuzz".
// That is, if any of the above conditions apply, print the above words _instead of the number_.

// - Otherwise, just print the number.

let hotNumber = 88;

if (hotNumber % 5 == 0 && hotNumber % 3 == 0) {
  console.log("FizzBuzz");
} else if (hotNumber % 5 == 0) {
  console.log("Buzz");
} else if (hotNumber % 3 == 0) {
  console.log("Fizz");
} else {
  console.log(hotNumber);
}
