/* CONFIGURAÇÃO DO SCROLLREVEAL*/
ScrollReveal({
    reset: true,
    distance: '80px',
    duration: 1200,
    delay: 150,
    easing: 'ease-out'
});

// Animações dos elementos da página
ScrollReveal().reveal('.foto-perfil', { origin: 'top' });
ScrollReveal().reveal('h1', { origin: 'left' });
ScrollReveal().reveal('.cabecalho-sub-titulo', { origin: 'right' });
ScrollReveal().reveal('.sobre-titulo', { origin: 'left', viewFactor: 0.2 });
ScrollReveal().reveal('.sobre-eu', { origin: 'bottom', viewFactor: 0.2 });
ScrollReveal().reveal('.habilidades', { origin: 'bottom', viewFactor: 0.2 }); // Animação da nova seção de Habilidades
ScrollReveal().reveal('.projeto-card', { origin: 'bottom', interval: 250, viewFactor: 0.2 });
ScrollReveal().reveal('.contatos-titulo', { origin: 'left', viewFactor: 0.2 });
ScrollReveal().reveal('.grupo-form', { origin: 'right', interval: 200, viewFactor: 0.2 });
ScrollReveal().reveal('.botao-form', { origin: 'bottom', viewFactor: 0.2 });

document.addEventListener("DOMContentLoaded", function () {
    const elementoBoasVindas = document.getElementById("mensagem-boas-vindas");
    
    if (elementoBoasVindas) {
        const hora = new Date().getHours();
        let saudacao = "";

        if (hora >= 5 && hora < 12) {
            saudacao = "☀️ Bom dia! Seja bem-vindo(a) ao meu portfólio.";
        } else if (hora >= 12 && hora < 18) {
            saudacao = "🌤️ Boa tarde! Seja bem-vindo(a) ao meu portfólio.";
        } else {
            saudacao = "🌙 Boa noite! Seja bem-vindo(a) ao meu portfólio.";
        }

        elementoBoasVindas.innerText = saudacao;
    }
});


//MODO NOTURNO//
function alternarTema() {
    const corpo = document.body;
    const botao = document.getElementById("btn-tema");
    
    corpo.classList.toggle("bg-dark");
    corpo.classList.toggle("text-white");

    if (corpo.classList.contains("bg-dark")) {
        botao.innerHTML = "☀️ Modo Claro";
        botao.classList.replace("btn-outline-light", "btn-outline-warning");
    } else {
        botao.innerHTML = "🌙 Modo Noturno";
        botao.classList.replace("btn-outline-warning", "btn-outline-light");
    }
}

//Whatsapp//
function enviarWhats(event) {
    event.preventDefault();

    const nome = document.getElementById('nome').value;
    const mensagem = document.getElementById('mensagem').value;
    const telefone = '5564999999999'; 

    const texto = `Olá, me chamo ${nome}. ${mensagem}`;
    const msgFormatada = encodeURIComponent(texto);
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    console.log(url);
    window.open(url, '_blank');
}