document.addEventListener('DOMContentLoaded', function () {
  var botao = document.getElementById('btn-mensagem');
  var mensagem = document.getElementById('mensagem-secreta');

  if (botao && mensagem) {
    botao.addEventListener('click', function () {
      var isHidden = window.getComputedStyle(mensagem).display === 'none';

      if (isHidden) {
        mensagem.style.display = 'block';
        botao.setAttribute('aria-expanded', 'true');
        mensagem.setAttribute('aria-hidden', 'false');
      } else {
        mensagem.style.display = 'none';
        botao.setAttribute('aria-expanded', 'false');
        mensagem.setAttribute('aria-hidden', 'true');
      }
    });
  }
});