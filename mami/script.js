let isNumber = 20;

if (isNumber % 3 === 0 && isNumber % 5 === 0) {
  console.log("That is FizzBuzz");
} else if (isNumber % 3 === 0) {
  console.log("That is Fizz");
} else if (isNumber % 5 === 0) {
  console.log("That is Buzz");
} else console.log(isNumber);
