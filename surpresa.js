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