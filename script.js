// script.js - comportamento do botão hamburguer (acessível)
document.addEventListener('DOMContentLoaded', function () {
  const btn = document.getElementById('btnMenu');
  const nav = document.getElementById('mainNav');
  if (!btn || !nav) return;

  btn.addEventListener('click', function () {
    const expanded = btn.getAttribute('aria-expanded') === 'true';
    btn.setAttribute('aria-expanded', String(!expanded));
    nav.classList.toggle('mobile'); // seu CSS deve ter .main-nav.mobile { display:block; } em mobile
  });
});