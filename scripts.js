(function() {
  'use strict';

  document.addEventListener('DOMContentLoaded', () => {
    const mainImage = document.getElementById('imagem-principal');
    const bgCircle = document.querySelector('.circulo');
    const selectors = document.querySelectorAll('.copinho');
    const primaryBtn = document.getElementById('btn-comprar');

    if (!mainImage || !bgCircle || !selectors.length) {
      console.warn('⚠️ Elementos críticos não encontrados no DOM.');
      return;
    }

    function updateTheme(src, color) {
      mainImage.src = src;
      bgCircle.style.background = color;
      
      selectors.forEach(btn => btn.classList.remove('active'));
      event?.currentTarget?.classList.add('active');
    }

    selectors.forEach(btn => {
      btn.addEventListener('click', () => {
        updateTheme(btn.dataset.img, btn.dataset.color);
      });
    });

    primaryBtn.addEventListener('click', () => {
      const originalText = primaryBtn.textContent;
      primaryBtn.textContent = 'Adicionado ao carrinho! ☕';
      primaryBtn.disabled = true;
      
      setTimeout(() => {
        primaryBtn.textContent = originalText;
        primaryBtn.disabled = false;
      }, 2000);
    });
  });
})();