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




 /////////////////////////////////////////////////////////////
 //segunda pintura
    // --- CONFIGURAÇÃO DO CONTEXTO CTX2 ---
// Certifique-se de que o seu HTML tenha <canvas id="canvas2" width="400" height="400"></canvas>
const pintura2 = document.getElementById('pintura2');

// Se o canvas2 for nulo, o código abaixo não funcionará.
if (!pintura2) {
    console.error("ERRO: Não foi possível encontrar o elemento <canvas id='canvas2'> no HTML.");
} else {
    // Força o tamanho para garantir
    pintura2.width = 400;
    pintura2.height = 400;
    const ctx2 = pintura2.getContext('2d');

    // --- FUNDO E TEXTO ---
    ctx2.beginPath(); // Começa um caminho limpo para o fundo
    ctx2.fillStyle = "white"; // Define o fundo como branco
    ctx2.fillRect(0, 0, 400, 400); // Pinta todo o canvas
    ctx2.closePath();

    ctx2.fillStyle = "#555"; // Cor do texto
    ctx2.font = "24px Arial";
    ctx2.textAlign = "center";
    ctx2.fillText("Canvas", 200, 90); // Posição do texto

    // --- LINHAS DE DIVISÃO (Cruz e Diagonais) ---
    ctx2.lineWidth = 1;

    // Linha Horizontal Verde
    ctx2.beginPath();
    ctx2.strokeStyle = "green";
    ctx2.moveTo(0, 200);
    ctx2.lineTo(400, 200);
    ctx2.stroke();
    ctx2.closePath();

    // Linha Vertical Cinza (Baixo)
    ctx2.beginPath();
    ctx2.strokeStyle = "grey";
    ctx2.moveTo(200, 200);
    ctx2.lineTo(200, 400);
    ctx2.stroke();
    ctx2.closePath();

    // Diagonais Coloridas
    ctx2.beginPath();
    ctx2.strokeStyle = "blue";
    ctx2.moveTo(200, 200);
    ctx2.lineTo(55, 65); // Conecta o centro ao canto do bloco azul
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.strokeStyle = "red";
    ctx2.moveTo(200, 200);
    ctx2.lineTo(345, 65); // Conecta o centro ao canto do bloco vermelho
    ctx2.stroke();
    ctx2.closePath();

    // --- ARCOS VERDES ---
    ctx2.strokeStyle = "green";
    // Arcos Superiores (Semicírculos)
    ctx2.beginPath(); ctx2.arc(200, 200, 45, Math.PI, 0); ctx2.stroke(); ctx2.closePath();
    ctx2.beginPath(); ctx2.arc(200, 200, 65, Math.PI, 0); ctx2.stroke(); ctx2.closePath();
    ctx2.beginPath(); ctx2.arc(200, 200, 85, Math.PI, 0); ctx2.stroke(); ctx2.closePath();

    // Arcos Inferiores (Base)
    ctx2.beginPath(); ctx2.arc(200, 400, 65, Math.PI, 1.5 * Math.PI); ctx2.stroke(); ctx2.closePath();
    ctx2.beginPath(); ctx2.arc(200, 400, 85, Math.PI, 1.5 * Math.PI); ctx2.stroke(); ctx2.closePath();
    ctx2.beginPath(); ctx2.arc(200, 400, 65, 1.5 * Math.PI, 0); ctx2.stroke(); ctx2.closePath();
    ctx2.beginPath(); ctx2.arc(200, 400, 85, 1.5 * Math.PI, 0); ctx2.stroke(); ctx2.closePath();

    // --- BLOCOS DE CORES (Retângulos) ---
    ctx2.beginPath(); ctx2.fillStyle = "blue"; ctx2.fillRect(0, 0, 55, 65); ctx2.closePath();
    ctx2.beginPath(); ctx2.fillStyle = "red"; ctx2.fillRect(345, 0, 55, 65); ctx2.closePath();
    ctx2.beginPath(); ctx2.fillStyle = "cyan"; ctx2.fillRect(0, 160, 40, 80); ctx2.closePath();
    ctx2.beginPath(); ctx2.fillStyle = "cyan"; ctx2.fillRect(365, 180, 35, 40); ctx2.closePath();
    ctx2.beginPath(); ctx2.fillStyle = "red"; ctx2.fillRect(160, 200, 40, 40); ctx2.closePath();

    // Formas em L (Amarelo e Preto)
    ctx2.beginPath(); ctx2.fillStyle = "yellow"; ctx2.fillRect(0, 340, 25, 60); ctx2.fillRect(0, 375, 60, 25); ctx2.closePath();
    ctx2.beginPath(); ctx2.fillStyle = "black"; ctx2.fillRect(375, 340, 25, 60); ctx2.fillRect(340, 375, 60, 25); ctx2.closePath();

    // --- CÍRCULOS ---
    // Círculo Flutuante (Ciano)
    ctx2.beginPath();
    ctx2.arc(200, 155, 18, 0, Math.PI * 2);
    ctx2.fillStyle = "cyan";
    ctx2.fill();
    ctx2.strokeStyle = "blue";
    ctx2.stroke();
    ctx2.closePath();

    // Círculos Amarelos Inferiores
    ctx2.beginPath();
    ctx2.arc(110, 290, 18, 0, Math.PI * 2);
    ctx2.fillStyle = "yellow";
    ctx2.fill();
    ctx2.strokeStyle = "blue";
    ctx2.stroke();
    ctx2.closePath();

    ctx2.beginPath();
    ctx2.arc(290, 290, 18, 0, Math.PI * 2);
    ctx2.fillStyle = "yellow";
    ctx2.fill();
    ctx2.strokeStyle = "blue";
    ctx2.stroke();
    ctx2.closePath();

    // Semicírculo Ciano na Base
    ctx2.beginPath();
    ctx2.arc(200, 400, 45, Math.PI, 0);
    ctx2.fillStyle = "cyan";
    ctx2.fill();
    ctx2.strokeStyle = "blue";
    ctx2.stroke();
    ctx2.closePath();
}