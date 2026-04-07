const numeroSecreto=Math.floor(Math.random()*100);
function verificarChute() {

    const chuteUser = document.getElementById("chute").value; 
    const mensagem = document.getElementById("mensagem");
    const corpo = document.getElementById("corpo");
    document.getElementById ("chute").value=""
    document.getElementById("chute").focus();

    const chute = parseInt(chuteUser); 

    if (chute === numeroSecreto) {
        mensagem.innerText = "Parabéns! Você acertou!";
        corpo.style.setProperty("background-color", "green");
    } else {
        corpo.style.setProperty("background-color", "red");
        
        if (chute > numeroSecreto) {
            mensagem.innerText = "Muito alto! Tente um número menor.";
        } else {
            mensagem.innerText = "Muito baixo! Tente um número maior.";
        }
    }
}