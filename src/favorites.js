const svg = document.getElementById('svgImg');
const card = document.querySelectorAll('.card');
const cardFooter = 'card__footer';
const checkFavorite = document.getElementById('favorite');
const addClassToButton = 'button-add';
const removeClassFromButton = 'button_remove';
document.body.addEventListener('click', addFavoriteFilms);
checkFavorite.addEventListener('change', showFavotiteFilms)

function addFavoriteFilms(event){
    const addFavoriteFilms = event.target.closest('.button_add');
    const removeFavoriteFilms = event.target.closest('.button_remove');
    const card = event.target.closest('.card');
    let favoriteFilms = {};
}
function addToFavorite(){
    card.forEach((element) => {
        element(event)

        let {target} = Event;
        if(!target.classList.cont)
    })
}