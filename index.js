const blue = "#0000ff"

class Bubble {
	constructor(x){
		this.x = x;
		this.y = 200;
		this.radius = 20*Math.random();
	}

	move() {
		this.x = this.x + Math.random() - 0.5;
		this.y -= 1;
	}
	draw() {
		context.beginPath();
		context.fillStyle = blue;
		context.arc(this.x, this.y, this.radius, 0, Math.PI * 2, false);
		context.closePath();
		context.fill();
	}
}

let DrawWindow = function(xWidth, yWidth){
	context = canvas.getContext('2d');
	context.clearRect(0,0,xWidth,yWidth);
}

let bubble1 = new Bubble(50);
let bubble2 = new Bubble(100);

function draw(){	
	
	DrawWindow(300,300)

	bubble1.move();
	bubble2.move();

	bubble1.draw();
	bubble2.draw();
}

setInterval(draw,10); 