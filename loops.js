// for statement example with error handling [Nested error handling and loop iteratation]
try {
    console.log("First try block statement is executed .....")
    for(i=0;ak>i;i++){
    console.log("Ak is still bigger than compare number ")
}}
catch{
    throw new Error('ak is not defined , (ak is comparing value)') // For net getting error we can declare ak value before for loop beginning 
}
finally{
    console.log("Finally block statement is executed...")
}

// // do...while statement 
let i = 0
do {
    i++
    console.log(5*i)
}
while(i<10)

// Continue Statement 
for (x=0;x<25;x++){
    if(x==16){
        continue;
    }
    console.log(x)
}

// Break Statement 
for (x=0;x<25;x++){
    if(x==16){
        break;
    }
    console.log(x)
}

// for...in statement 
let car = {
    name:"BMW",
    color:"Red",
    Price:1200000
}

for(let name in car){
    console.log(name +" :- "+ car[name])
}

// for...of statement 
arr=[1,2,3,4,5]
for (let val of arr){
    console.log(val)
}