function Block(y, speed) {

  // check direktion where the block shoude go and print them out in the left of right corner. The parameter exist in the settingsParameter.
  if(getGameDir() == "L"){
    this.y      = y;      // first pipe begining
    //this.y2 = y-Math.floor((Math.random()*300)+285);
    this.y2     = -35;    // second pipe begining
    this.speed  = speed;
    this.x      = 20;
    this.x2     = this.x/2;
    this.h      = 450;
    this.h2     = this.h / 30;
    this.h3     = y - 60;
    this.w      = 20;
    this.W2     = this.w/2;
  }
  else{
    this.y      = y;      // First pipe begining
    //this.y2 = y-Math.floor((Math.random()*300)+285);
    this.y2     = -35;    // Second pipe begining
    this.speed  = speed;
    this.x      = getresx();
    this.x2     = 20;
    this.h      = 450;
    this.h2     = this.h / 30;
    this.h3     = y - 60;
    this.w      = 30;
    this.W2     = this.w - 10;
  }
  
  this.color  = "#3e7a2f";
  
  this.my_gradient = ctx.createLinearGradient(0, 0, this.x + 5, 0);
  this.my_gradient.addColorStop(0, "black");
  this.my_gradient.addColorStop(1, "#3e7a2f");

	this.angle  = Ground.getAngle();
	this.random = Math.floor((Math.random()*(this.h2*2))+this.h2);
}

Block.prototype.draw = function (context) {
    context.beginPath();

    // Lower Pipe
    context.rect(this.x, this.y, this.w, this.h);
    context.rect(this.x - this.x2, this.y-3, this.W2 * 4, this.h2);
    context.rect(this.x + this.x2, this.y + this.random, this.W2, this.h2 * 2);

    // Colour filler
    context.fillStyle     = this.my_gradient;
    context.fill();
    context.lineWidth     = 3;
    context.strokeStyle   = "#000000";
    context.stroke();
}

Block.prototype.update = function (){
  if(getGameDir() == "L")
    this.x += this.speed*Math.cos(this.angle);
  else
    this.x -= this.speed*Math.cos(this.angle);

  this.y += this.speed*Math.sin(this.angle);
}

Block.prototype.getRect = function () {
  return new Rectangle(this.x, this.y, this.w, this.h);
}

//Block.prototype.getRect2 = function () {
//  return new Rectangle(this.x, this.y2, this.w, this.h3);
//}

Block.prototype.getRect3 = function () {
  return new Rectangle(this.x + this.x2, this.y + this.random, this.W2, this.h2 * 2);
}