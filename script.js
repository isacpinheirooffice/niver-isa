const botao = document.getElementById('botao-surpresa');
const fundo = document.getElementById('fundo-animado');
const coresInterrogacao = ['rgb(177 103 255 / 0.82)', '#a599c7', 'rgb(0 0 0 / 0.55)', '#5828ff', '#c230ea', '#ffffff'];

for (let i = 0; i < 30; i++) {
    const interrogacao = document.createElement('div');
    interrogacao.classList.add('interrogacao');
    interrogacao.textContent = '?';
    interrogacao.style.fontSize = (100 + Math.random() * 40) + 'px';
    interrogacao.style.left = Math.random() * 120 + 'vw';
    interrogacao.style.color = coresInterrogacao[Math.floor(Math.random() * coresInterrogacao.length)];
    interrogacao.style.animationDuration = (8 + Math.random() * 10) + 's';
    interrogacao.style.animationDelay = '-' + (Math.random() * 10) + 's';
    fundo.appendChild(interrogacao);
}

let cliques = 0;
const totalCliques = 16;

function posicionarBotaoInicial() {
    const container = document.querySelector('.container');
    const rect = container.getBoundingClientRect();

    botao.style.top = (rect.bottom + 20) + 'px';
    botao.style.left = '50%';
    botao.style.transform = 'translateX(-50%)';
}

window.addEventListener('load', posicionarBotaoInicial);


function moverBotao() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;

    const novoX = Math.random() * (larguraJanela - larguraBotao);
    const novoY = Math.random() * (alturaJanela - alturaBotao);

    botao.style.transform = 'none';
    botao.style.left = novoX + 'px';
    botao.style.top = novoY + 'px';
}

botao.addEventListener('click', function() {
    cliques++;

    if (cliques < totalCliques) {
        moverBotao();
        botao.textContent = `Oxi menina!? Clica aqui uai!(${cliques}/${totalCliques}) 😜`;
    } else {
        window.location.href = 'surpresa.html';
    }
});