const blue = "#0000ff"

let DrawWindow = function(xWidth, yWidth){
	context = canvas.getContext('2d');
	context.clearRect(0,0,xWidth,yWidth);
}

let DrawCircle = function (x, y, radius) {
	context.beginPath();
	context.fillStyle = blue;
	context.arc(x, y, radius, 0, Math.PI * 2, false);
	context.closePath();
	context.fill();
}

let circleYPosition = 200;
let circleXPosition = 260*Math.random();
let circleRadius = 20*Math.random();

function draw(){	
	
	DrawWindow(300,300)
	
	DrawCircle(circleXPosition, circleYPosition, circleRadius);

	if (circleYPosition < -50){
		circleYPosition = 200;
		circleXPosition = 300*Math.random();
		circleRadius = 20*Math.random()
	};
	
	circleYPosition -= 2;
	circleRadius += 0.1;
}
setInterval(draw,10); 