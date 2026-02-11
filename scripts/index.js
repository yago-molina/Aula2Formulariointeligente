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

function validarsenha() {
    const senha1 = document.getElementById("senha1").value;
    const senha2 = document.getElementById("senha2").value;
    const mensagemsenha = document.getElementById("mensagemsenha");

    if (senha1.length >= 8){
        if (senha1 == senha2){
            mensagemsenha.innerText = "Senha Valida"
            mensagemsenha.style.color = "green"
        }
        else{
            mensagemsenha.innerText = "Senhas não se coincidem"
            mensagemsenha.style.color = "red"
        }
    }else{
        mensagemsenha.innerText = "Senha Invalida. Precisa-se de 8 CARACTERES"
        mensagemsenha.style.color = "red"
    }
}

function cargo() {
    const idade2 = document.getElementById("idade2").value;
    const estudante = document.getElementById("estudante");
    const mensagemdesconto = document.getElementById("mensagemdesconto");
    
    if (idade2 >= 60 || estudante.checked){
        mensagemdesconto.innerText = "Você ganhou um desconto!"
        mensagemdesconto.style.color = "green"
    } else {
        mensagemdesconto.innerText = "Você não ganhou desconto"
        mensagemdesconto.style.color = "red"
    }
}

function confirmarnomesenha() {
    const nome = document.getElementById("Nome1").value;
    const idade = document.getElementById("idade3").value;
    const mensagemconfirm = document.getElementById("mensagemconfirm");

    if (nome == "" || idade < 0 || idade == "") {
        mensagemconfirm.innerText = "Nome invalido ou idade Invalida";
        mensagemconfirm.style.color = "red";
    }else {
        mensagemconfirm.innerText = "Nome/idade confirmados"
        mensagemconfirm.style.color = "green"
    }
}

