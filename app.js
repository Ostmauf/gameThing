let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keys = [];

canvas.width = 800;
canvas.height = 600;
groundHeight = -50;


class Box {
    constructor(x, y, w, h, color){
        this.x = x,
        this.y = y,
        this.w = w,
        this.h = h,
        this.color = color
    }
    draw = function(){
        ctx.fillStyle = this.color
        ctx.fillRect(this.x, this.y, this.w, this.h, this.color)
    }
}
//Skapar objekt till spelet
player1 = new Box(10, 550, 50, 50, 'blue')
ground = new Box(0, canvas.height, canvas.width, groundHeight, "black")

//Skapar spelets loop
setInterval(gameLoop, 1)

window.addEventListener("keydown", (e) => {
    keys[e.keyCode] = true;
})

window.addEventListener("keyup", (e) => {
    delete keys[e.keyCode];
})

function gameLoop(){
    ctx.clearRect(0, 0, canvas.width, canvas.height)
    ground.draw()
    player1.draw()
    move()
    checkWalls()
}

function move(){
    if (player1.y > 0) {
        if (keys[87]) {
            player1.y -= 1;
        }
    }
    if (player1.y < (canvas.height - 50)) {
        if (keys[83]) {
            player1.y += 1;
        }
    }
    if (player1.x < (canvas.width - 50)) {
        if (keys[68]) {
            player1.x += 1;
        }
    }
   if (player1.x > 0) {
        if (keys[65]) {
            player1.x -= 1;
        }
    }
}

function checkWalls(){

}