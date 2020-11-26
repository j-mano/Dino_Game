function LevelHandler() {
this.level = 1;
this.maxLevel = 5;
}

LevelHandler.prototype.nextLevel = function(){
 	this.level++;
	if(this.level >= this.maxLevel)
 	{
 		this.level = this.maxLevel;
 	}
}

LevelHandler.prototype.isMaxLevel = function () {
	return this.level == this.maxLevel;
}

LevelHandler.prototype.setstart = function(){
	this.level = 1;
}