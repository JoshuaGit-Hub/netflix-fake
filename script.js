const lupa = document.querySelector('#lupa');
const inputNav = document.querySelector('#input-procurar-nav');

lupa.addEventListener('click', () => {
    if(!inputNav.classList.contains('clicked')){
        inputNav.classList.add('clicked');
        lupa.classList.add('girar');
    }else{
        inputNav.classList.remove('clicked');
        lupa.classList.remove('girar');
    }
});