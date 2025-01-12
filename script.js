const sideBarNav = document.querySelector('.header');
const closeIcon = document.querySelector('.close-icon');
const menuIcon = document.querySelector('.hamburger-menu');
const navLinks = document.querySelectorAll('.nav li');

menuIcon.addEventListener('click', () => {
    sideBarNav.classList.toggle('sidebar-nav');
});

closeIcon.addEventListener('click', () => {
    sideBarNav.classList.toggle('sidebar-nav');
});

navLinks.forEach((navLink) => {
    navLink.addEventListener('click', () => {
        sideBarNav.classList.remove('sidebar-nav');
    });
});

window.addEventListener('click', (e) => {
    const clicked = e.target;
    if(!sideBarNav.contains(clicked) && !menuIcon.contains(clicked) && !closeIcon.contains(clicked)) {
        sideBarNav.classList.remove('sidebar-nav');
    }
});