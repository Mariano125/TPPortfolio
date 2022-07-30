

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


document.querySelector(".moon").addEventListener("click", modonoche, );

let sec1 =document.getElementById("sec1");
let sec2=document.getElementById("sec2");
let sec3=document.getElementById("sec3");
let sec4=document.getElementById("sec4");
let sec5=document.getElementById("sec5");

function modonoche(){
    
    sec1.classList.toggle("noche");
    sec2.classList.toggle("noche");
    sec3.classList.toggle("noche");
    sec4.classList.toggle("noche");
    sec5.classList.toggle("noche");
    
}
