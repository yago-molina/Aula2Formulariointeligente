function validar() {
    const idade = document.getElementById("idade").value;
    const nivel = document.getElementById("nivel").value;
    const mensagem = document.getElementById("mensagem");

    if (idade >= 16 && nivel > 5){
        mensagem.innerText = "Inscrição aceita. Categoria PRO";
        mensagem.style.color = "green";
    }else if (idade >= 16 && nivel <= 5){
        mensagem.innerText = "inscrição aceita. Categoria INICIANTE";
        mensagem.style.color = "blue";
    }else{
        mensagem.innerText = "Inscrição negada. Idade minima 16 ANOS";
        mensagem.style.color = "red";
    }
}
    


