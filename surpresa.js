const fundo = document.getElementById('fundo-animado');
const coresFesta = ['#957dc3', 'rgb(0 0 0 / 0.55)', 'rgb(177 103 255 / 0.82)', '#4d96ff', '#c230ea', '#ffffff'];

for (let i = 0; i < 40; i++) {
    const balao = document.createElement('div');
    balao.classList.add('balao');
    const tamanho = 20 + Math.random() * 30;
    balao.style.width = tamanho + 'px';
    balao.style.height = tamanho * 1.3 + 'px';
    balao.style.left = Math.random() * 100 + 'vw';
    balao.style.background = coresFesta[Math.floor(Math.random() * coresFesta.length)];
    balao.style.animationDuration = (8 + Math.random() * 10) + 's';
    balao.style.animationDelay = '-' + (Math.random() * 10) + 's';
    fundo.appendChild(balao);
}

for (let i = 0; i < 25; i++) {
    const confete = document.createElement('div');
    confete.classList.add('confete-fundo');
    confete.style.left = Math.random() * 100 + 'vw';
    confete.style.background = coresFesta[Math.floor(Math.random() * coresFesta.length)];
    confete.style.animationDuration = (4 + Math.random() * 4) + 's';
    confete.style.animationDelay = '-' + (Math.random() * 8) + 's';
    fundo.appendChild(confete);
}
const cards = document.querySelectorAll('.foto-card');

    cards.forEach(function(card) {
    let cliquesAtuais = 0;
    const cliquesNecessarios = parseInt(card.dataset.cliquesNecessarios);
    const contador = card.querySelector('.contador-capa');

    card.addEventListener('click', function() {
        if (card.classList.contains('revelada')) {
            return;
        }

        cliquesAtuais++;
        contador.textContent = `${cliquesAtuais}/${cliquesNecessarios}`;

        if (cliquesAtuais < cliquesNecessarios) {
            card.classList.add('tremendo');
            setTimeout(function() {
                card.classList.remove('tremendo');
            }, 300);
        } else {
            card.classList.add('revelada');
            dispararConfetes(card);
        }
    });
});

function dispararConfetes(card) {
    const cores = ['#8000ff', '#41024f', '#002bff', 'rgb(0 0 0 / 0.65)', '#6bcb77'];
    const posicao = card.getBoundingClientRect();
    const centroX = posicao.left + posicao.width / 2;
    const centroY = posicao.top + posicao.height / 2;

    for (let i = 0; i < 30; i++) {
        const confete = document.createElement('div');
        confete.classList.add('confete');
        confete.style.left = centroX + 'px';
        confete.style.top = centroY + 'px';
        confete.style.background = cores[Math.floor(Math.random() * cores.length)];

        const angulo = Math.random() * 360;
        const distancia = 80 + Math.random() * 120;
        const destinoX = Math.cos(angulo * Math.PI / 180) * distancia;
        const destinoY = Math.sin(angulo * Math.PI / 180) * distancia;

        confete.style.setProperty('--destino-x', destinoX + 'px');
        confete.style.setProperty('--destino-y', destinoY + 'px');

        document.body.appendChild(confete);

        setTimeout(function() {
            confete.remove();
        }, 1000);
    }
}
const cardMensagem = document.querySelector('.mensagem-final-card');
let cliquesMensagem = 0;
const cliquesNecessariosMensagem = parseInt(cardMensagem.dataset.cliquesNecessarios);
const contadorMensagem = cardMensagem.querySelector('.contador-capa');

cardMensagem.addEventListener('click', function() {
    if (cardMensagem.classList.contains('revelada')) {
        return;
    }

    cliquesMensagem++;
    contadorMensagem.textContent = `${cliquesMensagem}/${cliquesNecessariosMensagem}`;

    if (cliquesMensagem < cliquesNecessariosMensagem) {
        cardMensagem.classList.add('tremendo');
        setTimeout(function() {
            cardMensagem.classList.remove('tremendo');
        }, 300);
    } else {
        cardMensagem.classList.add('revelada');
        dispararConfetes(cardMensagem);
    }
});