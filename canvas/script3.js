let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let win_height = window.innerHeight;
let win_width = window.innerWidth;

canvas.style.background = 'gray';
canvas.width = win_width;
canvas.height = win_height;

// Object Interaction with events


class Circle {
    constructor(xpoint, ypoint, radius, color) {
        this.xpoint = xpoint;
        this.ypoint = ypoint;
        this.radius = radius;
        this.color = color;
    }

    draw(){
        ctx.beginPath()
        ctx.arc(this.xpoint , this.ypoint , this.radius , 0 , Math.PI * 2 , false)
        ctx.strokeStyle = 'green'
        ctx.lineWidth = 10
        ctx.fillStyle = this.color
        ctx.fill()
        ctx.stroke()
        ctx.closePath()
    }

    changecolor(newcolor){
        this.color = newcolor
        this.draw()
    }

    clickcircle(xloc , yloc){
    const dx = xloc - this.xpoint;
    const dy = yloc - this.ypoint;
    const distance = Math.sqrt(dx**2 + dy**2);

    if (distance <= this.radius) {
        console.log("Click was inside the circle!");
        this.changecolor("#58D")
    } else {
        console.log("Click was outside the circle.");
        this.changecolor('red')
    }
    }

}

let circle =  new Circle(600 , 350 , 100 , "red")
circle.draw()

canvas.addEventListener('click' , (e)=>{
    // circle.clickcircle()
    const rect = canvas.getBoundingClientRect()
    const x = e.clientX - rect.left
    const y = e.clientY - rect.top
    circle.clickcircle(x , y)
})
