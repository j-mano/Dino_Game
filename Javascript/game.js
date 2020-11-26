var canvas = document.getElementById("canvas");
var menybar = document.getElementById("menybar");
var information = document.getElementById("information");

var keys = [];

var State = {
    Splashscreen: 1,
    StartNewGame: 2,
    Running: 3,
    lostlife: 4,
    NextLevel: 5,
    Gameover: 6
};  

var state       = State.Splashscreen;
var points      = 1;

var mp3Bounce   = document.getElementById("audiobouncer");
var hitground   = document.getElementById("audiohitground");
var gameover    = document.getElementById("gameover");

var x   = 0;
var xy  = 0;

var fps = 0;
var lastCalledTime;

document.body.onkeydown = function(e) {
	keys[e.keyCode] = true;
	console.log("key: " + e.keyCode);
};

document.body.onkeyup = function(e) {
	keys[e.keyCode] = false;
};

var ball    = new Ball();
var ground  = new Ground();
var blocks  = []; // Array of blocking pipes / Obsticles in the game

function canvasonclick(){
    if (ball.jumping == false) {mp3Bounce.play();};

    ball.jump();
    ball.speed = ball.speed - 1;

    if (state == State.Gameover) {
        ball.y = 350;
        blocks = [];
        points = 1;
        state = State.Running;
        ball.speed = 0;
        xy = 0;
    }

    if (state == State.StartNewGame) {
        state = State.Running;
        x++;
    }
}

function updateRunning(){
	points++;
    menybar.innerHTML = points + " Points";

    if (keys[87]){
    	if (ball.jumping == false) {mp3Bounce.play();};
    	ball.jump()
    }

    handleblocks();
    if (ball.update()){
    	hitground.play();
    }

    pointshandler();
    for(var i in blocks){
    	blocks[i].update();
    }

    if(checkCollision()){
    	state = State.Gameover;
    	hitground.play();
    }

    ctx.clearRect(0, 0, canvas.width, canvas.height);
        for(var i in blocks){
    	blocks[i].draw(ctx);
    }

    ball.draw(ctx);
    ground.draw(ctx);
}

function update() {
    switch (state) {
        case State.Splashscreen:
            state = State.StartNewGame;
            break;
        case State.StartNewGame:
            //information.style.left = 50%;
            if (x <= 1) {
                information.innerHTML   = "Welcome to frappy ball " + "<br>" + "Game time = points" + "<br>" + "Press enter to start playing";
            }
            else{
                information.innerHTML   = "Press enter to restart";
            }

            if (keys[13] == true) {
                state = State.Running;
                x++;
            }
            break;
        case State.Running:
            information.innerHTML = "";

            //information.style.left = 0;
            //information.innerHTML = fps;

            updateRunning();
            break;

        case State.lostlife:
            break;

        case State.NextLevel:
            break;

        case State.Gameover:
            information.style.marginLeft = -400;

            information.innerHTML   = "Game over!!" + "<br>" + "Press enter to restart";
            //gameover.play();

            if (keys[13] == true) {
            	ball.y = 350;
            	blocks = [];
            	points = 1;
                state = State.Running;
                ball.speed = 0;
                xy = 0;
            }
        break;
    }

    delta = (Date.now() - lastCalledTime)/1000;
    lastCalledTime = Date.now();

    if(!lastCalledTime) {
        lastCalledTime = Date.now();
        fps = 0;
        return;
    }

    fps = 1 / delta;

    setTimeout(function () {
        update();
    }, 20);
}

update();

function checkCollision(){
	var ballrect = ball.getRect();
	
	for(var i in blocks){
		var blockrect = blocks[i].getRect();
		if (blockrect.rectangleCollision(ballrect)) {
			return true;
		}
	}
	
	//for(var i in blocks){
	//	var blockrect2 = blocks[i].getRect2();
	//	if (blockrect2.rectangleCollision(ballrect)) {
	//		return true;
	//	}
	//}
	
	for(var i in blocks){
		var blockrect3 = blocks[i].getRect3();
		if (blockrect3.rectangleCollision(ballrect)) {
			return true;
		}
	}
}

function pointshandler(){

}

function handleblocks() {
    if(getGameDir() == "L"){
        if (blocks.length < 5) {
            if (Math.random() * 100 < 5) {
                if (getClosetBlock() > 300) {
                    var y = (getresy()/4) * 2.5 + 100 * Math.random();
                    blocks.push(new Block(y, 4));
                }
            }
        }

        for (var i in blocks){
            if (blocks[i].x > Ground.x2) {
                blocks.splice(i,1);
                break;
            }
        }
    }
    else{
        if (blocks.length < 5) {
            if (Math.random() * 100 < 5) {
                if (getClosetBlock() < 600) {
                    var y = (getresy()/4) * 2.5 + 100 * Math.random();
                    blocks.push(new Block(y, 4));
                }
            }
        }

        for (var i in blocks){
            if (blocks[i].x < Ground.x1) {
                blocks.splice(i,1);
                break;
            }
        }
    }
}

function getClosetBlock() {
    if(getGameDir() == "L"){
        min = getresx();

        for(var i in blocks){
            if (blocks[i].x < min) {
                min = blocks[i].x;
            }
        }
    }

    if(getGameDir() == "R"){
        min = 0;

        for(var i in blocks){
            if (blocks[i].x > min) {
                min = blocks[i].x;
            }
        }
    }

    return min;
}