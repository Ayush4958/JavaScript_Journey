obj = {
    greet(){
        console.log(`Good Morning ${this.name}`)
    }
}

function person(name){
    this.name = name
}

Object.assign(person.prototype , obj)
// or we can use
// person.prototype.greet = obj.greet

const rubin = new person("Rubin")
console.log(rubin.greet()) // Good Morning Rubin

// we can also check that does the object have that property or it was a property of prototype
console.log(Object.hasOwn(rubin , "name")) // true
console.log(Object.hasOwn(rubin , "greet")) //false
