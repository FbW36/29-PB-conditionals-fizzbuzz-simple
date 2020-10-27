let number = 5
if(number % 3 === 0 && number % 5 === 0){console.log("FizzBuzz");}
else if (number % 5 === 0) console.log("Buzz");
else if (number % 3 === 0) console.log("Fizz");
else console.log(number);

/* for (let i = 1; i <= number; i++) {
    let output = "";
    if (i % 3 === 0) output += "Fizz";
    if (i % 5 === 0) output += "Buzz";
    console.log(output || i);
} */