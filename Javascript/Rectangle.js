function Rectangle(x, y, w, h) {
    this.x = x;
    this.y = y;
    this.w = w;
    this.h = h;
}

Rectangle.prototype.Right = function(){
    return this.x + this.w;
}

Rectangle.prototype.Bottom = function(){
    return this.y + this.h;
}

Rectangle.prototype.rectangleCollision = function (rect) {
    if (this.Right() < rect.x)
        return false;
    if (rect.Right() < this.x)
        return false;
    if (this.Bottom() < rect.y)
        return false;
    if (rect.Bottom() < this.y)
        return false;
    return true;
}

Rectangle.prototype.isInside = function (point) {
    if (this.Right() < point.x)
        return false;
    if (point.x < this.x)
        return false;
    if (this.Bottom() < point.y)
        return false;
    if (point.y < this.y)
        return false;
    return true;
}