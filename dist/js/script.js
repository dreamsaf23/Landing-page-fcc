// Navbar Fixed

window.onscroll = function (){
    const header = document.querySelector('header');
    const navbarFixed = header.offsetTop;
    const toTop = document.querySelector('#to-top');

    if(window.pageYOffset > navbarFixed) {
        header.classList.add('navbar-fixed');
        toTop.classList.remove('hidden');
        toTop.classList.add('flex');
    } else {
        header.classList.remove('navbar-fixed');
        toTop.classList.remove('flex');
        toTop.classList.add('hidden');
    }
};

// Hamburger

const hamburger = document.querySelector('#hamburger');
const navbar = document.querySelector('#nav-bar');

hamburger.addEventListener('click', function(){
    hamburger.classList.toggle('hamburger-active');
    navbar.classList.toggle('hidden');
});

// click diluar Hamburger

window.addEventListener('click', function(e){
    if(e.target != hamburger && e.target != navbar) {
        hamburger.classList.remove('hamburger-active');
        navbar.classList.add('hidden');
    }
});