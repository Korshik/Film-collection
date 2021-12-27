import {myFilmList} from './api.js';
    
function showFilms(myFilmList) {
    for (let i = 0; i < myFilmList.length; i++){
    let poster = myFilmList[i].Poster;
    let filmTitle = myFilmList[i].Title;
    let rating = myFilmList[i].imdbRating;
    let release = myFilmList[i].Released;
    let director = myFilmList[i].Director;
    let budget = myFilmList[i].BoxOffice;
    let plot = myFilmList[i].Plot;
    // заменить полученными из Api данными

    // console.log(myFilmList[i]);

    const myfilmList = document.createElement('div');
    div.addClassName='film-list'; /**создаю контейнер для наполнения фильмами */

    mokData.forEach((item) => {
        myfilmList.appendChild(createFilmCard(item));

    })

    const createFilmCard = (item) => {
    const cardContainer = document.createElement('div');
    cardContainer.addClassName('card');

    const cardHeader=document.createElement('div');
    cardHeader.addClassName='card-header';
    cardHeader.innerHTML= `<img class='card-header__image' src="${item.poster}">`
    cardContainer.appendChild(cardHeader);

    const cardTitle = document.createElement('h2');
    cardTitle.addClassName('card-header__title');
    cardTitle.innerText = item.title;
    cardHeader.after(cardTitle);

    const cardBody = document.createElement('div');
    cardBody.addClassName('card__body');
    cardBody.innerText+= item.body;
    cardBody.after('cardTitle');

    const cardFooter=document.createElement('div');
    cardFooter.addClassName('card__footer');

    const cardButton=document.createElement('button');
    cardButton.addClassName('card__button');
    cardFooter.appendChild(cardButton);
    cardFooter.after(cardBody);

    }
    return itemContainer;

   
    // // Card
    // let filmCardContainer = createElement(filmCardClass, div, "");
    // filmCardContainer.append(createCardImage(poster));
    // filmCardContainer.append(createCardElement(cardTitleClass, h2, filmTitle));

    // // Card Body
    // let cardBody = createContainer(cardBodyClass);
    // cardBody.append(getRating(rating));
    // cardBody.append(getReleaseDate(release));
    // cardBody.append(getDirector(director));
    // cardBody.append(getBudget(budget));
    // cardBody.append( getPlot(plot));

    // filmCardContainer.append(cardBody);

    // }
}
}
