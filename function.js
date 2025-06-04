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