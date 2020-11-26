function bakgrund() {
  
}

bakgrund.prototype.draw = function (context1) {
    context1.beginPath();
    context1.moveTo(Ground.x1, Ground.y1+50);
    context1.lineTo(Ground.x2, Ground.y2+50);
    context1.lineTo(Ground.x2, 600);
    context1.lineTo(Ground.x1, 600);
    context1.closePath();
	
    context1.fillStyle = "#FF0000";
    context1.fill();
    context1.lineWidth = 3;
    context1.strokeStyle = "#000000 ";
    context1.stroke();
}

/*Ground.prototype.draw = function (context) {
  context.beginPath();
  context.moveTo(Ground.x1, Ground.y1);
	context.lineTo(90, 450);
	context.lineTo(120, 430);
	context.lineTo(150, 430);
	context.lineTo(180, 450);
	context.lineTo(150, Ground.y1);
	context.closePath();
	
  context.fillStyle = "red";
  context.fill();
  context.lineWidth = 3;
  context.strokeStyle = "#000000 ";
  context.stroke();
}*/