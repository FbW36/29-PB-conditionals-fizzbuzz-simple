
let fizzBuzzInputNumber = 46;

if ( ((fizzBuzzInputNumber % 3) === 0) && ((fizzBuzzInputNumber % 5) !== 0) )
{
    console.log("Fizz")
} 
else if ( ((fizzBuzzInputNumber % 5) === 0) && ((fizzBuzzInputNumber % 3) !==0) )
{
    console.log("Buzz");
}
else if ( ((fizzBuzzInputNumber % 3) === 0) && ((fizzBuzzInputNumber % 5) === 0) )
{
/*     console.log(  (fizzBuzzInputNumber % 5) ===  0 );
 */    console.log("FizzBuzz");
}
else
{
    console.log(fizzBuzzInputNumber);
}
