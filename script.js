//VARIABLER

const navMenuBtn = document.querySelector('.navMenuBtn');
const headerNav = document.querySelector('.headerNav');


//EVENTLYSSNARE
navMenuBtn.addEventListener('click', toggleMenu);



//FUNKTIONER
function toggleMenu() {
     headerNav.classList.toggle('open');
}



