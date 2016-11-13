'use strict';

// defining global constants
var GAME_RUNNING = true;
var GAME_WIDTH = 1300;
var GAME_HEIGHT = 600;

var enemy = {};
var player = {};
var ball = {};

var enemyImage;
var playerImage;
var ballImage;

// referencing the canvas element      
var canvas = document.getElementById("mycanvas");

// creating a pen to draw on canvas         
var pen = canvas.getContext('2d');
        
function init() {
    //initialise ball enemy,players inside this init function
    
    // defining enemy object
    enemy = {
        x:150,
        y:70,
        w:50,
        h:50,
        speedY:5,
    };

    // the player object
    player = {
        x:10,
        y:GAME_HEIGHT/2,
        w:50,
        h:50,
        speedX:5,
        isMoving:false,
    };
    
    // the ball object
    ball = {
        x:GAME_WIDTH-50,
        y:GAME_HEIGHT/2,
        w:50,
        h:50
    };

    // adding mouse press event
    canvas.addEventListener('mousedown',function(){
        player.isMoving =true;                            
    });

    // adding the mouse button release event
    canvas.addEventListener('mouseup', function(){
    player.isMoving = false;
    });
    
    //loading images
    playerImage = new Image();
    playerImage.src = "Assets/pika.png";

    enemyImage = new Image();
    enemyImage.src = "Assets/drowsy.png";

    ballImage = new Image();
    ballImage.src = "Assets/ball.png";

} // end of init function
         
// creating a collision checking function         
function isColliding(r1,r2) {
    // this function will check if object r1 and r2 is coliding or not
     var x_axis = Math.abs(r1.x -r2.x)<=50;
     var y_axis = Math.abs(r1.y-r2.y)<=50;

     if(x_axis && y_axis) {
         return true;
     }
     else {
         return false;
     }
}
        
// creating the draw function
         
function draw(){
     pen.clearRect(0,0,GAME_WIDTH, GAME_HEIGHT);
     pen.fillRect(enemy.x, enemy.y, enemy.w, enemy.h);

     pen.fillRect(player.x, player.y, player.w, player.h);
     pen.fillRect(ball.x, ball.y, ball.w, ball.h);

      pen.drawImage(playerImage,player.x,player.y,player.w,player.h);
      pen.drawImage(enemyImage,player.x,player.y,player.w,player.h);
      pen.drawImage(ballImage,ball.x,ball.y,ball.w,ball.h);
}

// update function
function update(){
             enemy.y += enemy.speedY;
             
             if(enemy.y >= GAME_HEIGHT - enemy.h || enemy.y<=0)
                 {
                     enemy.speedY *= -1;
                 }
             
             if(player.isMoving  == true)
                 {
                     player.x += player.speedX;
                 }
             
             if(isColliding(player,enemy))
                 {
                     GAME_RUNNING = false;
                     alert("game over");
                     
                 }
             
             if(isColliding(player,ball)){
                GAME_RUNNING = false;
                alert("You Won !");
                }
         }
         
         function render()
         {
             //game loop
             
             draw();
             update();
             
             console.log("in render");
             
             if(GAME_RUNNING ==true)
             {
                window.requestAnimationFrame(render);
             }
             
             else
             {
                 GAME_RUNNING = true;
                start();
             }
         }
         
         function start()
         {
         init();
         render();
         }
         
         start();