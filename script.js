// Função para tocar o som de acordo com a tecla pressionada
function tocarSom(tecla) {
    const audio = document.getElementById(tecla);
    if (audio) {
      audio.currentTime = 0; // Reinicia o som se já estiver tocando
      audio.play();
    }
  }
  
  // Função para adicionar a animação de pressionamento de tecla
  function adicionarAnimacao(tecla) {
    const elemento = document.querySelector(`.drum[data-key="${tecla}"]`);
    if (elemento) {
      elemento.classList.add('ativa');
    }
  }
  
  // Função para remover a animação de pressionamento de tecla
  function removerAnimacao(tecla) {
    const elemento = document.querySelector(`.drum[data-key="${tecla}"]`);
    if (elemento) {
      elemento.classList.remove('ativa');
    }
  }
  
  // Evento keydown: Toca o som e adiciona animação
  window.addEventListener('keydown', function(event) {
    const tecla = event.key.toLowerCase();
    tocarSom(tecla);
    adicionarAnimacao(tecla);
    console.log(`Tecla pressionada: ${tecla} (Código: ${event.code})`);
  });
  
  // Evento keyup: Remove a animação
  window.addEventListener('keyup', function(event) {
    const tecla = event.key.toLowerCase();
    removerAnimacao(tecla);
    console.log(`Tecla liberada: ${tecla} (Código: ${event.code})`);
  });
  
  // Evento keypress: Mostra o caractere gerado (opcional)
  window.addEventListener('keypress', function(event) {
    console.log(`Caractere gerado: ${event.key} (Código: ${event.code})`);
  });
  
  // Adiciona evento de clique nos elementos da bateria
  document.querySelectorAll('.drum').forEach(elemento => {
    elemento.addEventListener('click', () => {
      const tecla = elemento.getAttribute('data-key');
      tocarSom(tecla);
      adicionarAnimacao(tecla);
      setTimeout(() => removerAnimacao(tecla), 100); // Remove a animação após um curto período
    });
  });
  