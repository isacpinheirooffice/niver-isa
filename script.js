const botao = document.getElementById('botao-surpresa');

let cliques = 0;
const totalCliques = 16;

function moverBotao() {
    const larguraJanela = window.innerWidth;
    const alturaJanela = window.innerHeight;
    const larguraBotao = botao.offsetWidth;
    const alturaBotao = botao.offsetHeight;

    const novoX = Math.random() * (larguraJanela - larguraBotao);
    const novoY = Math.random() * (alturaJanela - alturaBotao);

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