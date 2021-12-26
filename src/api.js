export let myFilmList = [];
export const getToken = fetch('https://fe08-films.herokuapp.com/auth', 
{method: 'POST'})
.then ((response) => {
    return response.json();
})
    .then((data => {
        let gottenToken = Object.values(data);
        const token = `Beare ${gottenToken[0]}`;
        return getFilms(token);
}));

function getFilms(token) {
    return fetch('https://fe08-films.herokuapp.com/films', {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
            Autorization: `${token}`,
        },
    }).then ((response) => {
        return response.json();
    })
        .then(data => {
            myFilmList = data['films']
            return getFilmList(myFilmList);

});
} 