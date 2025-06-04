// Dados das traduções
const traducoes = {
    pt: {
        title: "Lendas da Seleção Brasileira",
        neymar: [
            "⚽ Jogos Disputados: 128",
            "🏆 Títulos: 3",
            "⚽ Gols Marcados: 79", 
            "🎯 Assistências: 56",
            "🥇 Ouro Olímpico: 2016"
        ],
        ronaldo: [
            "⚽ Jogos Disputados: 97",
            "🏆 Títulos: 3", 
            "⚽ Gols Marcados: 33",
            "🎯 Assistências: 29",
            "🌟 Copa do Mundo: 2002"
        ]
    },
    en: {
        title: "Brazilian National Team Legends",
        neymar: [
            "⚽ Matches Played: 128",
            "🏆 Titles: 3",
            "⚽ Goals Scored: 79",
            "🎯 Assists: 56", 
            "🥇 Olympic Gold: 2016"
        ],
        ronaldo: [
            "⚽ Matches Played: 97",
            "🏆 Titles: 3",
            "⚽ Goals Scored: 33",
            "🎯 Assists: 29",
            "🌟 World Cup: 2002"
        ]
    }
};

// Função para alterar tema
function setTema(escuro) {
    aplicarTema(escuro);
    atualizarBotoesTema(escuro);
}

// Aplicar tema visual
function aplicarTema(escuro) {
    const blocos = document.querySelectorAll('.infoJogador');
    blocos.forEach(div => {
        div.className = escuro ? 'infoJogador divEscura' : 'infoJogador divClara';
    });
}

// Atualizar estado dos botões de tema
function atualizarBotoesTema(escuro) {
    const lightBtn = document.getElementById('lightBtn');
    const darkBtn = document.getElementById('darkBtn');
    
    if (lightBtn && darkBtn) {
        if (escuro) {
            lightBtn.classList.remove('active');
            darkBtn.classList.add('active');
        } else {
            darkBtn.classList.remove('active');
            lightBtn.classList.add('active');
        }
    }
}

// Função para trocar idioma
function trocarIdioma(idioma) {
    preencherTexto(idioma);
}

// Preencher textos na página
function preencherTexto(idioma) {
    const pageTitle = document.getElementById('pageTitle');
    const neymarStats = document.getElementById('neymarStats');
    const ronaldoStats = document.getElementById('ronaldoStats');

    if (pageTitle) pageTitle.textContent = traducoes[idioma].title;
    if (neymarStats) neymarStats.innerHTML = traducoes[idioma].neymar.map(item => `<li>${item}</li>`).join('');
    if (ronaldoStats) ronaldoStats.innerHTML = traducoes[idioma].ronaldo.map(item => `<li>${item}</li>`).join('');
}

// Inicialização quando a página carrega
window.onload = function () {
    preencherTexto('pt');
    aplicarTema(false);
};