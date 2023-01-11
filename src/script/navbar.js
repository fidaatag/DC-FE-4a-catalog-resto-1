const BtnBurger = document.querySelector('#hamburger');
const OpenMenu = document.querySelector('nav ul');


BtnBurger.addEventListener('click', ()=>{
    OpenMenu.classList.toggle('open');
})

// if (window.matchMedia("(min-device-width: 480px)").matches) {
//     // modify dom
// } 

