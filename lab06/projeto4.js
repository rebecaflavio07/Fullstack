let canvas = document.getElementById("Canvas");
let ctx = canvas.getContext('2d');

let bola = {
    x: 0,
    y: 100,
    raio: 50,
    img: new Image(),
    desenha: function(){
        this.img.src = 'santos.png';
        ctx.beginPath();
        ctx.drawImage(this.img, this.x, this.y, 2*this.raio, 2*this.raio);
        ctx.closePath();
    }
}
    function animacao(){
    ctx.clearRect(0,0,400,400)
    bola.desenha();
    requestAnimationFrame(animacao)
       if(bola.x > 350){
        bola.x = 250;
         bola.y = 100;}     
       bola.x= -250;
       bola.y = 100;
      
}
animacao();
document.addEventListener('mousemove',function(evento){
    let rect = canvas.getBoundingClientRect();
    let x_mouse = evento.clientX - rect.left;
    let y_mouse = evento.clientY - rect.top;
    console.log(x_mouse,y_mouse);
    bola.x = x_mouse;
    bola.y = y_mouse;
 
})