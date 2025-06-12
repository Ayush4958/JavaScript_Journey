// Keyed collection 
// Map collection

const sound = new Map();

// set function insert the values in the Map 
sound.set('dog' , 'bark')
sound.set('cat' , 'meow')
sound.set('lion' , 'growl')
sound.set('bird' , 'chirp')

// size will give size of the map
console.log(sound.size) // ans :- 4

// get function will give the value of given index 
console.log(sound.get('dog')) // bark
console.log(sound.get('monkey')) // undefined

// has function checks the given value is in map or not
console.log(sound.has('lion')) // true

// delete function will the delete the collection inside brackets
sound.delete('dog')
console.log(sound.has('dog')) // false

// for...of loop in Map 
for (let[k,v] of sound){
    console.log(`${k} language is ${v}`)
}

// for deleting the whole map collection we uses clear function :-
sound.clear();

// WeakMap collection
const wm = new WeakMap()
obj1 = {}
obj2 = {}
wm.set(obj1,"data for obj1")
wm.set(obj2,"data for obj2") 
console.log(wm) 

// Set collection
const set = new Set();
set.add(15)
set.add("code")
set.add("master")
set.add(15) // trying to add duplicate value

set.has(15); // true
set.delete("master")
console.log(set.size) // 2
console.log(set) // it will ignore the duplicate value and will only return all unique values no repetietion possible

//  creating new object with function

function person(name , age , gender){
    this.name = name
    this.age = age
    this.gender = gender
}
console.log(new person("Robert" , 51 , "Male"))

// Deleting the element from object
console.log(delete person.name) // true

// set & get function 
const myObj = {
  x: 50,
  get y() { // get function doesn't need a parameter
    return this.x + 1;
  },
  set z(a) { // set function needs a one parameter
    this.x = a / 2;
  },
};

console.log(myObj.x); // 50
console.log(myObj.y); // 51
myObj.z = 40; // Calls the set c(x) method
console.log(myObj.x); // 20