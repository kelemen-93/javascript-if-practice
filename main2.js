var canvas = document.getElementById('myCanvasTwo');
var context = canvas.getContext('2d');

var canvasWidth = canvas.width;
var canvasHeight = canvas.height;

var positionX = canvasWidth - canvasWidth;
var positionY = canvasHeight / 2;

var lineCounter = 1;

for (lineCounter; lineCounter < 151; lineCounter += 1) {
  
    context.beginPath();
    context.moveTo(positionX, positionY);
  
  
    if (positionX % 2 !== 0) {
        context.lineTo(canvasWidth / 2, canvasHeight);
    } else {
          context.lineTo(canvasWidth / 2, canvasHeight - canvasHeight);
      }
  
    context.strokeStyle = 'rgba(255, 0, 0, 0.5)'
    context.stroke();
    positionX += 3;
  
}