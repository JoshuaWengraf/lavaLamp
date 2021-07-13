const blue = "#43A6C6"

class Bubble {
	constructor(){
		this.x = 300*Math.random();
		this.y = 200;
		this.radius = 20*Math.random();
	}

	move() {
		this.x = this.x + 10*(Math.random() - 0.5);
		this.y -= 2;
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

let bubbles = new Array();

const TIME_BETWEEN_FRAMES = 0.1

let currentTime = Math.floor(Date.now() / 1000);
let lastRenderTime = 0

function draw(){

	DrawWindow(300,300)

	bubbles.push(new Bubble())
	for (const bubble of bubbles){
		bubble.move()
		bubble.draw() 
		
		if (bubble.y < -200){
			bubbles.pop()
		}
	};

	window.requestAnimationFrame(draw)

	const secondsSinceLastRender = (currentTime - lastRenderTime) / 1000
	if (secondsSinceLastRender < 10){return} 
	lastRenderTime = currentTime
}

draw()
