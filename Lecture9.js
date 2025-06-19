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

// Classes & Instances in OOPs
class person{
    constructor(name){
        this.name = name
    }
    intro(){
        console.log(` Hello my name is ${this.name}`)
    }
}

const rahul = new person('rahul')
rahul.intro()

// creatig another class with student and have the class person as a prototype 
class student extends person{
    constructor(name,year){
        super(name)
        this.name = name
        this.year = year
    }
    dohorseriding(){
        if (this.year>1){
            console.log(`${this.name} can do horse riding because he is ${this.year} year student`)
        }
        else{
            console.log(`${this.name} cannot do horse riding because he is ${this.year} year student`)
        }
    }
}
// using the class to access the extended class function
const mohan = new student("Mohan" , 2)
mohan.intro()
mohan.dohorseriding()


// Practice session of MDN documentation.......
// class Shape {
// constructor(name,sides,sideLength){
// this.name = name
// this.sides = sides
// this.sideLength = sideLength
// }
// calcPerimeter(){
// console.log( this.sides * this.sideLength )
// }
// }
// const square = new Shape('square' , 4 , 5)
// square.calcPerimeter()
// const triangle = new Shape('triangle' , 3 , 3)
// triangle.calcPerimeter()
