const mobileNav = document.querySelector('ul');
const burgerIcon = document.querySelector('.burger');

burgerIcon.addEventListener('click', function(){
    mobileNav.classList.toggle('active');
    burgerIcon.classList.toggle('active'); 
   
})