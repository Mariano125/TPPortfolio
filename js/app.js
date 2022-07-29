

document.querySelector(".bars_menu").addEventListener("click", animateBars, );
nav = document.getElementById('acti')


var line1__bars = document.querySelector(".line1__bars-menu");
var line2__bars = document.querySelector(".line2__bars-menu");
var line3__bars = document.querySelector(".line3__bars-menu");

function animateBars(){
    line1__bars.classList.toggle("activeline1__bars-menu");
    line2__bars.classList.toggle("activeline2__bars-menu");
    line3__bars.classList.toggle("activeline3__bars-menu");
    nav.classList.toggle('activar');
}



nav = document.getElementById('acti')


