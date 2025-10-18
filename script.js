const lupa = document.querySelector('.lupa');
const inputNav = document.querySelector('.inputs-busca');

lupa.addEventListener('click', () => {
    if (!inputNav.classList.contains('clicked')) {
        inputNav.classList.add('clicked');
        lupa.classList.add('girar');
    } else {
        inputNav.classList.remove('clicked');
        lupa.classList.remove('girar');
    }
});

const movies = [{
        id: 1,
        title: 'Caramelo',
        ano: 2025,
        genre: ['Drama', 'Romance'],
        favorite: false
    },
    {
        id: 2,
        title: 'Coco',
        ano: 2018,
        genre: ['Drama', 'Comedy'],
        favorite: false
    },
    {
        id: 3,
        title: 'It a Coisa',
        ano: 2017,
        genre: ['Terror', 'Drama'],
        favorite: false
    }
];

let moviesAtuais = [movies];
let gridAtual = 'todos';
let procurado = '';

function mostrarMovies() {

}