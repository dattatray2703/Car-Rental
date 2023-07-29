const ScrollReveal = require('scrollreveal');
let menu = document.querySelector("#menu-icon");
let navbar = document.querySelector(".navbar");

menu.click = () =>{
    menu.classList.toggle("bx-x");
    navbar.classList.toggle("active");
}

window.onscroll = () =>{
    menu.classList.remove("bx-x");
    navbar.classList.remove("active");
}
const sr = ScrollReveal ({
    distance: '60px',
    duration: 2500,
    delay: 400,
    reset: true
})
ScrollReveal().reveal(".text",{delay: 200, origin: "top"})
sr.reveal('.form-container form',{delay: 800, origin: 'left'})
sr.reveal('.heading',{delay: 800, origin: 'top'})
sr.reveal('.ride-container .box',{delay: 600, origin: 'top'})
sr.reveal('.services-container .box',{delay: 800, origin: 'left'})
sr.reveal('.about-container .box',{delay: 800, origin: 'left'})
sr.reveal('.reviews-container ',{delay: 800, origin: 'left'})
sr.reveal('.newsletter .box',{delay: 400, origin: 'bottom'})