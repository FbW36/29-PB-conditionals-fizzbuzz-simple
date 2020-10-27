let log = console.log;
/* 
For any given number, if the number is:

divisible by 3, print "Fizz".
divisible by "5", print "Buzz".
divisible by both 3 and 5, print "FizzBuzz".
*/
let num = 105;
let threevible = 'Fizz';
let fivible = 'Buzz';
if(num % 3 === 0 && num % 5 === 0) {
    log(threevible + fivible);

}
else if(num % 5 === 0){
    log(fivible);
}
else if(num % 3 === 0) {
    log(threevible);
}
else {
    log(num);
}