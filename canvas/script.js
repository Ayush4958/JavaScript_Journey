let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let win_height = window.innerHeight;
let win_width = window.innerWidth;

canvas.style.background = 'green';
canvas.width = win_width;
canvas.height = win_height;

// ctx.fillStyle = "red"
// ctx.fillRect(300,0,200,200); // element is square
// ctx.fillStyle = "blue"
// ctx.fillRect(300,400,150,290); // this element will be blue  
// FIrst Parameter shows the Xposition of element , 2nd parameter show Yposition of element , 3rd & 4th element shows the width & height of the element

// // creating a circle 
// ctx.beginPath()
// ctx.arc(370 , 300 , 50 , Math.PI * 2 , false)
// ctx.strokeStyle = "white" 
// ctx.lineWidth = 10
// ctx.stroke() // you need to declare all the styling before this function
// // ctx.fill() // we can also use this fill function for filling the whole circle 
// ctx.closePath()


class Circle {
    constructor(xpos, ypos, radius, color, text , speed) {
        this.xpos = xpos;
        this.ypos = ypos;
        this.radius = radius;
        this.color = color;
        this.text = text;
        this.speed = speed
        this.dx = 1 * speed
        this.dy = 1 * speed
    }

    draw() {
        ctx.beginPath();
        ctx.arc(this.xpos, this.ypos, this.radius, 0, Math.PI * 2, false);
        ctx.strokeStyle = this.color;
        ctx.lineWidth = 8;
        ctx.stroke();

        ctx.fillStyle = this.color;
        ctx.textAlign = 'center';
        ctx.textBaseline = "middle";
        ctx.font = "20px Arial";
        ctx.fillText(this.text, this.xpos, this.ypos);

        ctx.closePath();
    }

    move(){
        this.draw(ctx)

        if(this.xpos + this.radius >= win_width){
            this.dx =- this.dx
        }
        if(this.ypos + this.radius >= win_height){
            this.dy =- this.dy
        }
        if(this.xpos - this.radius < 0){
            this.dx =- this.dx
        }
        if(this.ypos - this.radius < 0){
            this.dy =- this.dy
        }

        this.xpos += this.dx
        this.ypos += this.dy
    }
}

let getdistance = function(xpos1 , ypos1 , xpos2 , ypos2){
    var result =  Math.sqrt(Math.pow(xpos2-xpos1 , 2) + Math.pow(ypos2-ypos1 , 2))
    return result
}

let allcircles = []

function randomint(min, max) {
    return Math.random() * (max - min) + min;
}

// Creating multiple balls 
for(i=0; i<10; i++){
    radius = 50
    xrandom = randomint(radius,(win_width-radius))
    yrandom = randomint(radius,(win_height-radius))
    let mycircle = new Circle(xrandom, yrandom , radius , "red" , 'A' , 2)
    allcircles.push(mycircle)
    mycircle.draw()

}


let updatecircle = function(){
    ctx.clearRect(0 , 0 , win_width , win_height)
    requestAnimationFrame(updatecircle)
    allcircles.forEach(e=>{
        e.move()
    })

    // Element Interaction
    // let mycircle2 = new Circle(800, 300, 200, 'red', 'B' , 0);
    // mycircle2.draw()
    // mycircle2.move()
    // if (getdistance(mycircle1.xpos , mycircle1.ypos , mycircle2.xpos , mycircle2.ypos) < mycircle2.radius){
    //     mycircle2.color = "white"
    //     mycircle2.text = "I am B , A is inside"
    // }
    // else{
    //     mycircle2.color = "red"
    //     mycircle2.text = "I am B , A is outside"
    // }
}
updatecircle()
