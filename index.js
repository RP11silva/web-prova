
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


function setTema(escuro) {
    aplicarTema(escuro);
    atualizarBotoesTema(escuro);
}


function aplicarTema(escuro) {
    const blocos = document.querySelectorAll('.infoJogador');
    blocos.forEach(div => {
        div.className = escuro ? 'infoJogador divEscura' : 'infoJogador divClara';
    });
}


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

function trocarIdioma(idioma) {
    preencherTexto(idioma);
}


function preencherTexto(idioma) {
    const pageTitle = document.getElementById('pageTitle');
    const neymarStats = document.getElementById('neymarStats');
    const ronaldoStats = document.getElementById('ronaldoStats');

    if (pageTitle) pageTitle.textContent = traducoes[idioma].title;
    if (neymarStats) neymarStats.innerHTML = traducoes[idioma].neymar.map(item => `<li>${item}</li>`).join('');
    if (ronaldoStats) ronaldoStats.innerHTML = traducoes[idioma].ronaldo.map(item => `<li>${item}</li>`).join('');
}


window.onload = function () {
    preencherTexto('pt');
    aplicarTema(false);
};


function mostrarPopup(titulo, conteudo) {
  const overlay = document.getElementById('popupOverlay');
  const body = document.getElementById('popupBody');
  
  body.innerHTML = `
    <h2>${titulo}</h2>
    <div>${conteudo}</div>
  `;
  
  overlay.classList.add('active');
  document.body.style.overflow = 'hidden';
}


function fecharPopup() {
  const overlay = document.getElementById('popupOverlay');
  overlay.classList.remove('active');
  document.body.style.overflow = 'auto';
}


document.addEventListener('keydown', function(e) {
  if (e.key === 'Escape') {
    fecharPopup();
  }
});
 setTimeout(() => {
        const popup = document.createElement('div');
        popup.className = 'promo-popup';
        
        
        popup.style.position = 'fixed';
        popup.style.bottom = '20px';
        popup.style.right = '20px';
        popup.style.backgroundColor = '#373851';
        popup.style.padding = '20px';
        popup.style.borderRadius = '8px';
        popup.style.boxShadow = '0 4px 15pxrgba(255, 204, 0, 0.5);';
        popup.style.zIndex = '1000';
        popup.style.maxWidth = '300px';
        
        
        popup.innerHTML = `
            <h3 style="margin-bottom: 10px; color:rgba(255, 204, 0, 0.5);; font-size: 18px;">Bem -vindo!</h3>
            <p style="margin-bottom: 15px;">Explore a história e estatísticas dos maiores ídolos do futebol brasileiro!</p>
            <button id="closePopup" style="background:rgba(255, 204, 0, 0.5);; color:rgb(0, 0, 0); border: none; padding: 8px 15px; border-radius: 4px; cursor: pointer; font-weight: bold;">Fechar</button>
        `;
        
        
        document.body.appendChild(popup);
        
      
        document.getElementById('closePopup').addEventListener('click', () => {
            popup.remove();
        });
    }, 3000);
;