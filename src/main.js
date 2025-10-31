
import './styles/main.less';


const btn = document.querySelector('#menu-toggle');
const nav = document.querySelector('#nav-links');
if (btn && nav) {
  btn.addEventListener('click', () => {
    nav.classList.toggle('is-open');
  });
}
