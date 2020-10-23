class Obstacle {
    constructor(x, y, width, height) {  // to pass the size and location 
    this.x = x;
    this.y = y;
    this.width = width;
    this.height = height;
    }

    drawObstacle() {
        ctx.fillStyle = 'orange'; 
        ctx.fillRect(this.x, this.y, this.width, this.height);
    }
    
}