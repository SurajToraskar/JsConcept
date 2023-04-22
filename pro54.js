let canvas=document.querySelector('#myCanvas');
let context=canvas.getContext('2d');

// context.strokeStyle='purple';
// context.lineWidth='10';
// context.beginPath();
// context.moveTo(0,0);
// context.lineTo(500,500);
// // context.lineTo(250,500);
// context.moveTo(500,0);
// context.lineTo(250,250)
// context.moveTo(0,500);
// context.lineTo(250,250)
// context.stroke();

// context.fillStyle='orange'
// context.strokeStyle='purple';
// context.lineWidth='10';
// context.beginPath();
// context.moveTo(200,0);
// context.lineTo(0,200)
// context.lineTo(400,200);
// context.lineTo(200,0);
// context.stroke();
// context.fill();


// context.lineWidth='5';
// context.strokeStyle='green';
// context.fillStyle='orange';
// context.beginPath();
// context.moveTo(40,40);
// context.lineTo(360,40);
// context.lineTo(360,200);
// context.lineTo(40,200)
// context.lineTo(40,38);
// context.stroke();
// context.fill();

// context.fillStyle='yellow';
// context.fillRect(100,100,250,200);
// context.strokeStyle='red';
// context.strokeRect(100,100,250,200);

// context.fillStyle='orange';
// context.strokeStyle='green';
// context.lineWidth='10';
// context.beginPath();
// context.arc(200,200,150,0,2*Math.PI);
// context.stroke();
// context.fill();

// context.font='50px MV Boli'
// context.fillStyle='green';
// context.fillText('You Win',100,100);

context.font='50px Consolas'
context.fillStyle='green';
context.textAlign='center';
context.fillText('Hello World',canvas.width/2,canvas.height/2);
