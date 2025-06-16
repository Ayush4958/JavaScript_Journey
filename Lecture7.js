// promises in js

// We uses promises because of callback hell (It is a chain of lot of function connected with each other) this makes your code hard 
// to read & maintain so we uses promises to maintain the code clean

let prom1 = new Promise((resolve , reject)=>{
    let a = Math.random()
    if (a < 0.6){
        reject("Number greater than 0.6 is not acepted")
    }
    else{
        setTimeout(()=>{
            console.log("value 1 is in resolve staged")
            resolve("Problem is in resolve area")
        },2000)
    }
}
)

let prom2 = new Promise((resolve , reject)=>{
    let a1 = Math.random()
    if (a1 < 0.6){
        reject("Number greater than 0.6 is not acepted 2")
    }
    else{
        setTimeout(()=>{
            console.log("value 2 is in resolve staged")
            resolve("Problem is in resolve area 2")
        },1000)
    }
}
)

// Promise.all function returns all resolve value in array if promises are resolved
// let p3 = Promise.all([prom1 , prom2])

// Promise.allSettled function returns the status of all promises even they are resolved or not 
// let p3 = Promise.allSettled([prom1 , prom2])

// Promise.race function returns the promises result/reject which ever runs first 
let p3 = Promise.race([prom1 , prom2])



// then, catch & finally function in working
p3.then((a) =>{ // it will continue when promise is resolved
    console.log(a)
}).catch((err) =>{ // it will continues when the function is rejected
    console.log(`Error is ${err}`)
    // we can also handle this error by throwing made up error
}).finally(() =>{ // it will run at the end of promises, genreally done for wrap up the things....
    console.log("This is the final msg to wrap up the things........")
})