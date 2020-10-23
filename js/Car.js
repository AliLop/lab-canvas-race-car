class Car  {
    constructor() {   // you can pass x, y and = to x & y
        this.x = 200;
        this.y = 520;
        this.width = 50;
        this.heigth = 80;
        this.img = './images/car.png';
    }

    drawCar() {
        let carImg = new Image();  //can't be a const bc you're assigning it to a img - has to be a LET
        carImg.src = this.img;
        ctx.drawImage(carImg, this.x, this.y, this.width, this.heigth);
        // ctx is getting load before so we can call it herebut not on th constructor 
    }

    moveCar(keyCode)  {  // parameter
        // console.log('x', this.x); to find out the x of teh boundaries
        ctx.clearRect(this.x, this.y, this.width, this.heigth); // clearing ONLY TEH CAR 
        switch(keyCode) {
            case 37: //left, decreases x
            if(this.x > 20) {
              this.x -= 10;
            }
            break;
            
            case 39:  // right 
            if(this.x < 430) {
                this.x += 10;
            }
            break;
        }
    }
}