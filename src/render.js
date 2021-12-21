const filmList = document.createElement('div');
div.addClassName='film-list'; /**создаю контейнер для наполнения фильмами */

mokData.forEach((item) => {
filmList.appendChild(createFilmCard(item));

})

const createFilmCard = (item) => {
const cardContainer = document.createElement('div');
cardContainer.addClassName('card');

const cardHeader=document.createElement('div');
cardHeader.addClassName='card-header';
cardContainer.appendChild('cardHeader')
cardHeader.innerHTML= `<img class='card-header__image'>${item.poster}`

const cardTitle = document.createElement('h2');
cardTitle.addClassName('card-header__title');
cardTitle.innerHTML = `<h2 class="card-header__title">${item.title}</h2>`;
cardTitle.after('cardHeader');

const cardBody = document.createElement('div');
cardBody.addClassName('card__body');
cardBody.innerHTML+= `<div class="card__body">${item.body}</div>`;
cardBody.after('cardTitle');

const cardFooter=document.createElement('div');
cardFooter.addClassName('card__footer');
const cardButton=document.createElement('button');
cardButton.addClassName('card__button');
cardFooter.appendChild('cardButton');
cardFooter.after('cardBody');


return itemContainer
}
