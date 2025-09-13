'use strict';
(function(){
  const btn = document.getElementById('showBtn');
  const out = document.getElementById('output');

  if(!btn || !out){
    console.error('Не найден(ы) #showBtn или #output. Проверь имена и разметку.');
    return;
  }

  btn.addEventListener('click', () => {
    const isShown = out.classList.toggle('show');
    out.setAttribute('aria-hidden', String(!isShown));
    btn.setAttribute('aria-expanded', String(isShown));
    btn.textContent = isShown ? 'Сховати текст' : 'Показати текст';
  });
})();