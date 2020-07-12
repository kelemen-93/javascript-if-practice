var canvas = document.getElementById('myCanvasThree');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var positionX = canvasWidth - canvasWidth;
var positionY = canvasHeight / 2;

var counter = 0;

for (counter; counter < 450; counter+= 1) {
  
    context.beginPath();
    context.moveTo(positionX, positionY);
  
    if (positionX % 4 === 0) {
        context.lineTo(canvasWidth - canvasWidth, canvasHeight - canvasHeight);
    } else if (positionX % 4 === 1) {
        context.lineTo(canvasWidth, canvasHeight - canvasHeight);
    } else if (positionX % 4 === 2) {
        context.lineTo(canvasWidth - canvasWidth, canvasHeight);
    } else if (positionX % 4 === 3) {
        context.lineTo(canvasWidth, canvasHeight);
    } else {
        console.log('Something is wrong!');
    }
  
    context.strokeStyle = 'rgba(0, 0, 255, 0.5)';
    context.stroke();
    positionX += 1;
  
}