// Let's play mini FizzBuzz! For any given number, if the number is: 
// - divisible by 3, print "Fizz". 
// - divisible by "5", print "Buzz". 
// - divisible by both 3 and 5, print "FizzBuzz". 

// That is, if any of the above conditions apply, print the above words *instead of the number*.

// - Otherwise, just print the number.

const num = Math.floor(Math.random() * 100);
console.log(num);

if (num % 3 === 0) {
    console.log("Divisible by 3 ==> Fizz");
}
else if (num % 5 === 0) {
    console.log("Divisible by 5 ==> Buzz");
}
else if (num % 3 === 0 && num % 5 === 0) {
    console.log("Divisible by 3 & 5 ==> FizzBuzz");
}
else {
    console.log(num);
}