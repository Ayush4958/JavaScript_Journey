// In this we learn how to make an sparse array and insert value after it's created

arr = Array(5) // This will set the length of this array to 5, so this will make it sparse
console.log(arr.length) // It will print 5

arr[0] = 'one'
arr[1] = 'two'
arr[2] = 'three'
arr[3] = 'four'
arr[4] = 'five'
arr[5] = 'six'
console.log(arr)

// If u declare the length of array less than it's origin self, It will turncate itself
arr.length = 4
console.log(arr) // [ 'one', 'two', 'three', 'four' ]

// Next topic is built array function, you should go and learn it from moxilla documentation

// Object.groupby function 

const stock = [
  { name: "Tesla", type: "EV" },
  { name: "BMW", type: "Petrol" },
  { name: "MG", type: "CNG" },
  { name: "Lambo", type: "Petrol" },
  { name: "Ferrari", type: "CNG" },
];

const output = Object.groupBy(stock, ({type}) =>type)
console.log(output)

// Creating multi dimensional array 

x = Array(3)
for(let i = 0; i < 3; i++){
    x[i] = Array(3)
    for(let j = 0; j < 3; j++){
        x[i][j] = `${i} ${j}`
        console.log(x[i][j]) 
    }
}
