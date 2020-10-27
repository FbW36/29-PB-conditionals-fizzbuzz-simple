//Let's play mini FizzBuzz! For any given number, if the number is: 
let fizzNum = 21 ;
//- divisible by 3, print "Fizz". 
if(fizzNum % 3 == 0){
    console.log("Fizz") ;
}else if(fizzNum % 5 == 0){
    console.log("Buzz") ;
}else if(fizzNum % 3 == 0 && fizzNum % 5 == 0){
    console.log("FizzBuzz") ;
}else{
    console.log(fizzNum) ;
}