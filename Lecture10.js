// asynchronous javascript

// fetching the jason file 
const fetchfile = fetch( "https://mdn.github.io/learning-area/javascript/apis/fetching-data/can-store/products.json")

console.log(fetchfile)

fetchfile.then((response) =>{
    console.log(`Fetched result :- ${response.status}`)
})

console.log("Started Requesting")
