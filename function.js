// Function for Fibonacci Series
function  Fibonacci(n) {
    if (n<=2){
        return 1
    }
    return Fibonacci(n-1) + Fibonacci(n-2)
}
Fibonacci(15)
console.log(Fibonacci(15))  // answer is 610

// Function for factorial number 
function factorial(x) {
    if (x<=1){
        return x
    }
    return x * factorial(x-1)
}
console.log(factorial(5)) // 120
console.log(factorial(15))  // 1307674368000

// Arrow Function usage ..... 
let flow = (s) => {
    if(s%2==0){
        return 'It\'s a even number'
    }
    else{
        return 'It\'s a Odd number'
    }
}
console.log(flow(12))

// Bitwise Operators (In all these operator logic gate is used ...)
console.log(15 & 9) // AND operator  ans:- 9
console.log(15 | 9) // OR operator   ans:- 15
console.log(15 ^ 9) // XOR operator  ans:- 6
console.log(~10)  // NOT operator   ans:- -11
console.log(~5)   // ans:- -6

// Ternary Operator
age = 15
let sign = age>18 ? console.log("You are an adult") : console.log("You are an minor")