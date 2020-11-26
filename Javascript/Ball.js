function Ball() {
    if(getGameDir() == "L"){
        this.x = 700;
    }
    else{
        this.x = 150;
    }
    
    this.y = 370;

    this.r = 16; //Radius of ball

    if(getGameDir() == "L"){
        this.angle = 50;
    }
    else{
        this.angle = -50;
    }
    
    this.jumpspeed = -12;
    this.speed = this.jumpspeed;
    
    this.color      = "#006666";
    this.g          = 0.4;

    this.jumping    = false;
    this.cruching   = false;

    this.image      = document.getElementById("ball");
    this.image2     = document.getElementById("ball2");

    var hitground   = document.getElementById("audiohitground");
}

Ball.prototype.draw = function (context) {
    /*context.beginPath();
    context.arc(this.x, this.y, this.r, 0, 2 * Math.PI, false);
    context.fillStyle = this.color;
    context.fill();
    context.lineWidth = 3;
    context.strokeStyle = "black";
    context.stroke();*/
    
    context.save();
    context.translate(this.x, this.y);
    //context.rotate(this.angle);

    //drawing a crouching or stading/running dino dependend on the players input.
    if(this.cruching == false)
        context.drawImage(this.image, -this.r, -this.r,this.r*2,this.r*2);
    else
        context.drawImage(this.image2, -this.r, -this.r,this.r*2,this.r*2);

    context.restore();
};

Ball.prototype.update = function () {
    if (this.jumping){
        this.y += this.speed;
        this.speed += this.g;
        
        if (this.y < 0){
            this.jumping = true;
            this.y = 30;
            return false;
        }

        if (this.y > getresy() - (getresy() / 10)){
            this.jumping = false;
            this.y = getresy() - (getresy() / 10);
            return true;
        }
    }
    else {
        this.angle += -0.5;
    }

    return false;
 }

Ball.prototype.jump = function () {
    if (this.jumping == false){
        this.jumping = true;

        this.speed = this.jumpspeed;
    }
}
 
Ball.prototype.getRect = function () {
  return new Rectangle(this.x - this.r, this.y - this.r, this.r*2, this.r*2);
}
