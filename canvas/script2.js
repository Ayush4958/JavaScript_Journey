let canvas = document.querySelector("canvas");
let ctx = canvas.getContext("2d");

let win_height = window.innerHeight;
let win_width = window.innerWidth;

canvas.style.background = 'green';
canvas.width = win_width;
canvas.height = win_height;

// Images inside the canvas
 class Img{
    constructor(imgpath , xpos , ypos , width , height){
        this.imgpath = imgpath
        this.xpos = xpos
        this.ypos = ypos
        this.width = width
        this.height = height
    }

 }

 function createimg(imgpath , xpos , ypos , width , height){
    let myimg = document.createElement("img")
    myimg.src = imgpath
    myimg.onload = ()=>{
        ctx.drawImage(myimg , xpos , ypos , width , height)
    }
 }

// You can use your cumtomised img too...
 let img = new Img('logo.jpg' , 500 , 400 , 500 , 400)
 createimg(img.imgpath , img.xpos , img.ypos , img.width , img.height)
