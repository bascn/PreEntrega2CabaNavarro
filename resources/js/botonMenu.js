// Hola, implementé este script para poder hacer funcional el botón que despliga los links en el navbar.

const toggleButton = document.getElementsByClassName('navbar-toggle')[0];
const navbarLinks = document.getElementsByClassName('navbar-link');

toggleButton.addEventListener('click', function(){
    for (var index = 0; index < navbarLinks.length; index++) 
        navbarLinks[index].classList.toggle('active')
        
    
});