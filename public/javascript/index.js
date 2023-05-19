//toogle icon navbar 

let menuIcon = document.querySelector('#menu-icon');
let navbar = document.querySelector('.navbar');

menuIcon.onclick = () =>{
    menuIcon.classList.toggle('bx-x');
    navbar.classList.toggle('active');
}


//scrool reveal

ScrollReveal({ 
    // reset: true,
    distance : '80px',
    duration : 2000,
    delay : 200
 });

 ScrollReveal().reveal('.home-content, .heading', { origin: 'top'});
 ScrollReveal().reveal('.home-image, .services-container, .project-box, .contact form',  { origin: 'bottom'});
 ScrollReveal().reveal('.home-content h1, .about-img', { origin: 'left'});
 ScrollReveal().reveal('.home-content p, .about-content', { origin: 'right'});

 //typed js 
 const typed = new Typed('.multiple-text',{
    // strings : ['Web Developer', 'Android Developer', 'Ethical Hacker'],
    strings : ['Web Developer', 'Ethical Hacker'],
    typeSpeed : 100,
    backSpeed : 100,
    backDelay : 1000,
    loop : true,

 })