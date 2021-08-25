let canvas = document.querySelector('canvas');
let ctx = canvas.getContext('2d');
let keys = [];

canvas.width = 800;
canvas.height = 600;
groundHeight = -50;
player1Speed = 1;


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
player1 = new Box(10, 550, 50, 50, 'blue');
ground = new Box(0, canvas.height, canvas.width, groundHeight, "lightgreen");
platform = new Box(300, 350, 60, 30, "purple");

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
    platform.draw()
    player1.draw()
    move()
    checkWalls()
}

function move(){
    if (player1.y > 0) {
        if (keys[87]) {
            player1.y -= player1Speed;
        }
    }
    if (player1.y + player1.h < canvas.height + groundHeight) {
        if (keys[83]) {
            player1.y += player1Speed;
        }
    }
    if (player1.x < (canvas.width - 50)) {
        if (keys[68]) {
            player1.x += player1Speed;
        }
    }
   if (player1.x > 0) {
        if (keys[65]) {
            player1.x -= player1Speed;
        }
    }
    if (player1.y < platform.y || player1.x > (platform.x - 50)) {
        console.log("HIT!!!")
    }

}



function checkWalls(){

}