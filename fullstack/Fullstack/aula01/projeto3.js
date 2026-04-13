let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext("2d");

//chao
ctx.beginPath();
ctx.fillStyle= "gray";
ctx.fillRect(0, 300, 400, 100);
ctx.closePath();

//sol
ctx.beginPath();
ctx.fillStyle= "yellow";
ctx.arc(300, 50, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();

//casa
ctx.beginPath();
ctx.fillStyle= "brown";
ctx.fillRect(200, 200, 100, 100);
ctx.closePath();

//200+50=250

//telhado
ctx.beginPath();
ctx.fillStyle= "salmon";
ctx.moveTo(200, 200);
ctx.lineTo(250, 150);
ctx.lineTo(300, 200);
ctx.fill();
ctx.closePath();    

//arvore
ctx.beginPath();
ctx.fillStyle= "green";
ctx.arc(350, 250, 30, 0, 2 * Math.PI);
ctx.fill();
ctx.closePath();


ctx.beginPath();
ctx.fillStyle="green";
ctx.arc(100,210,30,0,2*Math.PI);
ctx.fill();
ctx.closePath();

//tronco
ctx.beginPath();
ctx.fillStyle= "brown";
ctx.fillRect(340, 250, 20, 50);
ctx.closePath();

ctx.beginPath();
ctx.fillStyle= "brown";
ctx.fillRect(90, 210, 20, 100);
ctx.closePath();

//porta
 ctx.beginPath();
ctx.fillStyle= "black";
 ctx.fillRect(235, 250, 30, 50);
 ctx.closePath();

 //janela
 ctx.beginPath();
ctx.fillStyle= "white";
 ctx.fillRect(215, 220, 20, 20);
 ctx.closePath();

 //janela
 ctx.beginPath();
ctx.fillStyle= "white";
 ctx.fillRect(265, 220, 20, 20);
 ctx.closePath();

 //cachoeira
 ctx.beginPath();
ctx.fillStyle= "blue";
 ctx.fillRect(30, 300, 50, 100);
 ctx.arc(55, 300, 25, 0, Math.PI, true);
 ctx.fill();
 ctx.closePath();




 