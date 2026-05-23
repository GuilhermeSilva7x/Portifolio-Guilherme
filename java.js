ScrollReveal({

    // true = a animação volta a acontecer
    // quando você sai e entra novamente na seção
    reset: true,

    // Define a distância do movimento do elemento
    // antes de aparecer na tela
    distance: '80px',

    // Tempo da animação em milissegundos
    // 1200 = 1,2 segundos
    duration: 1200,

    // Pequeno atraso antes de iniciar
    delay: 150,

    // Deixa o final da animação mais suave
    easing: 'ease-out'

});

// Faz a foto vir de cima para baixo
ScrollReveal().reveal('.foto-perfil', {

    // Define de onde o elemento surgirá
    origin: 'top'

});

// Faz o nome "Guilherme Silva"
// aparecer vindo da esquerda
ScrollReveal().reveal('h1', {

    origin: 'left'

});

// Faz o subtítulo aparecer da direita
ScrollReveal().reveal('.cabecalho-sub-titulo', {

    origin: 'right'

});

// Título "Sobre mim"
// entra pela esquerda
ScrollReveal().reveal('.sobre-titulo', {

    origin: 'left',

    // Define quando a animação começa
    // 0.2 = 20% do elemento visível
    viewFactor: 0.2

});

// Texto sobre você
// sobe de baixo para cima
ScrollReveal().reveal('.sobre-eu', {

    origin: 'bottom',

    viewFactor: 0.2

});

// Os projetos aparecem de baixo
// um por um
ScrollReveal().reveal('.projeto-card', {

    origin: 'bottom',

    // tempo entre cada card
    interval: 250,

    viewFactor: 0.2

});


// Título "Entre em contato"
// vindo da esquerda
ScrollReveal().reveal('.contatos-titulo', {

    origin: 'left',

    viewFactor: 0.2

});

// Campos do formulário
// entram pela direita
ScrollReveal().reveal('.grupo-form', {

    origin: 'right',

    // atraso entre um campo e outro
    interval: 200,

    viewFactor: 0.2

});

// Botão sobe de baixo
ScrollReveal().reveal('.botao-form', {

    origin: 'bottom',

    viewFactor: 0.2

});
// Define uma função chamada 'enviarWhats' que recebe o 'event' (evento) como parâmetro.
// Geralmente, essa função é disparada quando um formulário é enviado (submit).
function enviarWhats(event) {
    
    // Cancela o comportamento padrão do evento. 
    // No caso de um formulário, evita que a página recarregue ao clicar no botão de envio.
    event.preventDefault();

    // Busca o elemento HTML com o ID 'nome' e guarda o que foi digitado nele (o valor) na constante 'nome'.
    const nome = document.getElementById('nome').value;
    
    // Busca o elemento HTML com o ID 'mensagem' e guarda o texto digitado na constante 'mensagem'.
    const mensagem = document.getElementById('mensagem').value;
    
    // Define o número de telefone fixo que vai receber a mensagem (incluindo o código do país: 55).
    const telefone = '5564992517948';

    // Cria a frase final juntando o texto padrão com o nome e a mensagem que o usuário digitou.
    const texto = `Olá, meu nome é ${nome}, ${mensagem}`;
    
    // Transforma o texto em um formato seguro para URLs (substituindo espaços por %20, quebras de linha, etc.).
    const msgFormatada = encodeURIComponent(texto);
    
    // Cria o link final do WhatsApp utilizando a API do 'wa.me', juntando o telefone e a mensagem codificada.
    const url = `https://wa.me/${telefone}?text=${msgFormatada}`;
    
    // Exibe o link gerado no console do navegador (útil para testes e depuração).
    console.log(url);
    
    // Abre a URL criada em uma nova aba do navegador ('_blank'), direcionando o usuário para o WhatsApp.
    window.open(url, '_blank');
}