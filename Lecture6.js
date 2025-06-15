// classes in js

class bird{
    constructor(name){ 
        this.name = name
        console.log("Object is been created...")
    }
    eats(){
        console.log("Function is running for eating")
    }
    fly(){
        console.log("Function is running for flying")
    }
}


class ostrich extends bird { // this is the way to inherit the one class to another
    constructor(name){
        super(name) // without this keyword ostrich class can not work because it fetch the parameters from main class constructor
        console.log("Object is created and he is a ostrich...")
    }

    eats(){ // we can overwrite the function 
        super.eats() // we use this line of code for running the same code from parent class
        console.log("Function is running for eating (in a special way)")
    }
    // we can also use set and get method in the classes
}

let p = new bird("peacock");
console.log(p)

let o = new ostrich("Shaturmurgh")
console.log(o)
