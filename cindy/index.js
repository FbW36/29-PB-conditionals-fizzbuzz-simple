//29-PB-conditionals-fizzbuzz-simple
//Programming Basics: Fizzbuzz (using simple if conditionals)

//Let's play mini FizzBuzz! For any given number, if the number is:

    //divisible by 3, print "Fizz".
    //divisible by "5", print "Buzz".
    //divisible by both 3 and 5, print "FizzBuzz".

    
    for (let i =1; i <= 25; i++)
{
    if (i % 15 == 0)
        console.log("FizzBuzz");
    else if (i % 3 == 0)
        console.log("Fizz");
    else if (i % 5 == 0)
        console.log("Buzz");
    else
        console.log(i);
}

//That is, if any of the above conditions apply, print the above words instead of the number.

    //Otherwise, just print the number.
