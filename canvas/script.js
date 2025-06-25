let canvas = document.querySelector("canvas")
let ctx = canvas.getContext("2d")

// Puuting window height & width inside a variable
let win_height = window.innerHeight
let win_width = window.innerWidth

canvas.style.background = 'green'
canvas.width = win_width
canvas.height = win_height

ctx.fillStyle = "red"
ctx.fillRect(300,0,150,200);
ctx.fillStyle = "blue"
ctx.fillRect(300,400,150,290); // this element will be blue  
// FIrst Parameter shows the Xposition of element , 2nd parameter show Yposition of element , 3rd & 4th element shows the width & height of the element

// creating a circle 
ctx.beginPath()
ctx.arc(370 , 300 , 50 , Math.PI * 2 , false)
ctx.strokeStyle = "white" 
ctx.lineWidth = '10'
ctx.stroke() // you need to declare all the styling before this function
ctx.closePath()