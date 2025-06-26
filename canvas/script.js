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


let hit_counter = 0;


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
        this.text = hit_counter
        ctx.clearRect(0 , 0 , win_width , win_height)
        this.draw(ctx)

        if(this.xpos + this.radius >= win_width){
            this.dx =- this.dx
            hit_counter++
        }
        if(this.ypos + this.radius >= win_height){
            this.dy =- this.dy
            hit_counter++
        }
        if(this.xpos - this.radius < 0){
            this.dx =- this.dx
            hit_counter++
        }
        if(this.ypos - this.radius < 0){
            this.dy =- this.dy
            hit_counter++
        }

        this.xpos += this.dx
        this.ypos += this.dy
    }
}


// let ran_x = Math.floor(Math.random() * win_width);
// let ran_y = Math.floor(Math.random() * win_height); 

let mycircle = new Circle(100, 150, 50, 'red', hit_counter , 2);
mycircle.draw()

let updatecircle = function(){
    requestAnimationFrame(updatecircle)
    mycircle.move()
}

updatecircle()

// for (let i = 0; i < 1; i++) {
//     let ran_x = Math.floor(Math.random() * win_width);
//     let ran_y = Math.floor(Math.random() * win_height); 
//     let mycircle = new Circle(ran_x, ran_y, 50, 'red', circle_counter , 2);
//     circles.push(mycircle);
//     mycircle.draw(); // draw this specific circle
//     circle_counter++;
// }

console.log(circles);
