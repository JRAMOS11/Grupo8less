// src/main.js
import './styles/main.less';

// Toggle menú móvil
const btn = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav-links');
if (btn && nav) {
  btn.addEventListener('click', () => nav.classList.toggle('is-open'));
}

// Imágenes desde la web (asigna por ID del <img> en index.html)
const IMGS = {
  'img-baleada':     'https://upload.wikimedia.org/wikipedia/commons/0/0a/Baleada_hondurena.jpg',
  'img-hamburguesa': 'https://images.unsplash.com/photo-1550547660-d9450f859349?q=80&w=1200&auto=format',
  'img-pollo':       'https://images.unsplash.com/photo-1544025162-d76694265947?q=80&w=1200&auto=format',
  'img-pupusas':     'https://upload.wikimedia.org/wikipedia/commons/6/6f/Pupusas_de_queso_y_frijol.jpg'
};

for (const [id, url] of Object.entries(IMGS)) {
  const el = document.getElementById(id);
  if (el) {
    el.src = url;
    el.loading = 'lazy';
    el.referrerPolicy = 'no-referrer';
    if (!el.alt) el.alt = id.replace('img-', '').replace('-', ' ');
  }
}