let menu = document.querySelector('.fa-bars');
let navbar = document.querySelector('.navbar');
menu.addEventListener('click',function(){
    menu.classList.toggle('fa-xmark');
    navbar.classList.toggle('nav-toggle');
});
window.addEventListener('scroll',()=>{
    menu.classList.remove('fa-xmark');
    navbar.classList.remove('nav-toggle');
});