const toggle = document.getElementById('nav-toggle');
const nav = document.querySelector('.header__nav');

toggle.addEventListener('click', () => {
    nav.classList.toggle('active');
})