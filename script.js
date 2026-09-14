//VARIABLER

const navMenuBtn = document.querySelector('.navMenuBtn');
const headerNav = document.querySelector('.headerNav');


//EVENTLYSSNARE
navMenuBtn.addEventListener('click', toggleMenu);



//FUNKTIONER
function toggleMenu() {
   console.log('klickade på knappen');    
}

headerNav.classList.toggle('hidden');

if(headerNav.classList.contains('hidden')) {
    navMenuBtn.innerHTML = ''