function Ground() {
    this.image = document.getElementById("mark");
    this.image2 = document.getElementById("city");
}

// Defult values of the ground values
Ground.x1   = -10;
Ground.y1   = (getresy() / 10) * 9;
Ground.x2   = getresx() + 10;
Ground.y2   = (getresy() / 10) * 9;

Ground.x3   = -10;
Ground.y3   = (getresy() / 10) * 9.2 + 10;
Ground.x4   = 600;
Ground.y4   = (getresy() / 10) * 9.2 + 10;

Ground.getAngle = function () {
	var dx = Ground.x2 - Ground.x1;
    var dy = Ground.y2 - Ground.y1;
    
    return Math.atan(dy / dx);
}

Ground.prototype.draw = function (context) {
	context.beginPath();
	
	context.moveTo(Ground.x1, Ground.y1);
	context.lineTo(Ground.x2, Ground.y2);
	context.lineTo(Ground.x2, Ground.y3);
    context.lineTo(Ground.x1, Ground.y4);
    
    context.drawImage(this.image, Ground.x1, Ground.y1);
	context.closePath();
	
	context.fillStyle   = "#33ee44";
    context.fill();
    context.lineWidth   = 3;
    context.strokeStyle = "black";
    context.stroke();
}

Ground.prototype.getRect = function () {
    return new Rectangle(this.x1, this.y1, this.x2, this.y2);
}