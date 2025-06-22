// asynchronous javascript

// fetching the jason file 
const fetchfile = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")
console.log(fetchfile)

// fetchfile.then((res) => {
//     console.log(`Fetched result :- ${res.status}`)
//     let json = res.json()
//     json.then((data) => {
//         console.log(data[0].name)
//     })
// })

// Above code is just like callback hell, we could do it nicely like :-
fetchfile
.then((res) => {
    if(!res.ok){
        throw new Error(`Error occured is ${res.status}`)
    }
    return res.json()})
.then((data) =>{
    for(let i = 0; i < data.length; i++){
        console.log(data[i].name)
    }
})
.catch((err) =>{
    console.log(`Error is ${err}`)
})

// Cases of multiple independent API 

const fetchfile1 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json",)

const fetchfile2 = fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/not-found",)

const fetchfile3 = fetch( "https://mdn.github.io/learning-area/javascript/oojs/json/superheroes.json",)

// Running of Promise.all() on API's
Promise.all([fetchfile1, fetchfile2, fetchfile3]) // All API are pririnted 
.then((res) =>{
    for (const r of res){
        console.log(`${r.url} is ${r.status}`)
    }
})
.catch((err) =>{
    console.log(`Error is :- ${err}`)
})

// Running of Promise.any() on API's
Promise.any([fetchfile1, fetchfile2, fetchfile3]) // 1st API which will run will be printed with its status
.then((res) => {
     console.log(`${res.url}: ${res.status}`);
})
.catch((err) => {
     console.log(`Error is :- ${err}`)
})

// Error handling on async & await function
async function fetchProducts() {
  const response = await fetch("https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json");
  if(!response.ok) {
    throw new Error(`HTTP error: ${response.status}`);
  }
  const data = await response.json();
  return data;
}

const promise = fetchProducts();
promise
.then((data) => {
    console.log(data[0].name);
})
.catch((err) => {
    console.error(`Could not get products: ${err}`);
  });

