// Iterator function 

function makeiterator( start =0, end = Infinity , step = 1){
    let startindex = start
    let iterationcount = 0

    return{
        next(){
            let result;
            if (iterationcount < end){
                result = {
                    value : startindex , 
                    done : false
                }
                startindex += step
                iterationcount ++
                return result
            }
            else {
                result = {
                    value : iterationcount,
                    done : true
                }
            }
        }
    }
}

const myiterator = makeiterator(5 , 10 , 20)
let result = myiterator.next()

while (!result.done){
    console.log(result.value)
    result = myiterator.next()
}

 // We build loop fucntion from scratch but can not use inside the built-in loop 
 // So to overcome this problem we use generator function so we can use the in-build loop inside our scratch iterator function

 function* newiterator(start,end,step=1){
    for(let i = start; i <=end ; i += step){
        yield i
    }
 }

let iter = newiterator(1,20,2)
console.log(iter.next().value)

 
