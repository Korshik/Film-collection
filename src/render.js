import { createSorting } from "./sorting.js";
const filmList = document.querySelector(".film-list");

function deleteCard() {
const card = document.querySelectorAll(".card");
for (let i = 0; i < card.length; i++) {
card[i].remove();
}
}

function createDataFilms(data) {
const getArray = data;
let gottenArray = getArray.map((element) => {
if (element.BoxOffice === "N/A") {
element.BoxOffice === 0;
}

if (!element.Released) {
element.Released = "-";
}

if (!element.Director ) {
element.Director = "-";
}

if (element.Plot.length >= 140) {
element.Plot = element.Plot.slice(0, 137) + "...";
}

return element;

});
createSorting(getArray);


getFilmCard(getArray);

return gottenArray;

}

function getFilmCard(data) {
const div = document.createElement('div');
div.classList.add='film-list'; 

const createFilmCard = (item) => {
const cardContainer = document.createElement('div');
cardContainer.classList.add('card');

const cardHeader = document.createElement('div');
cardHeader.classList.add = 'card-header';
cardHeader.innerHTML= `<img class='card-header__image' src="${item.Poster}">`
cardContainer.appendChild(cardHeader);

const cardTitle = document.createElement('h2');
cardTitle.classList.add('card-header__title');
cardTitle.innerText = item.Title;
cardHeader.after(cardTitle);

const cardBody = document.createElement('div');
cardBody.classList.add('card__body');
cardContainer.append(cardBody);

const filmInfo = document.createElement('div');
filmInfo.classList.add('film-info');
cardBody.append(filmInfo);

const filmInfoTitle = document.createElement('p');
filmInfoTitle.classList.add('film-info__title');
filmInfoTitle.innerText = 'Рейтинг';
filmInfo.append(filmInfoTitle);

const rating = document.createElement('p');
rating.classList.add('film-info__text');
rating.innerText = item.imdbRating;
filmInfo.appendChild(rating);

const realise = document.createElement('div');
realise.classList.add('film-info');
cardBody.appendChild(realise);

const realiseTitle = document.createElement('p');
realiseTitle.classList.add('film-info__title');
realiseTitle.innerText = 'Дата релиза';
realise.append(realiseTitle);

const realiseData = document.createElement('p');
realiseData.classList.add('film-info__text');
realiseData.innerText = item.Released;
realise.append(realiseData);

const director = document.createElement('div');
director.classList.add('film-info');
cardBody.appendChild(director);

const directorTitle = document.createElement('p');
directorTitle.classList.add('film-info__title');
director.innerText = 'Режиссер';
director.append(directorTitle);

const directorName = document.createElement('p');
directorName.classList.add('film-info__text');
directorName.innerText = item.Director;
director.append(directorName);

const budget = document.createElement('div');
budget.classList.add('film-info');
cardBody.appendChild(budget);

const budgetTitle = document.createElement('p');
budgetTitle.classList.add('film-info__title');
budgetTitle.innerText = 'Бюджет';
budget.append(budgetTitle);

const budgetItem = document.createElement('p');
budgetItem.classList.add('film-info__text');
budgetItem.innerText = item.BoxOffice;
budget.append(budgetItem);

const plot = document.createElement('div');
plot.classList.add('film-info');
cardBody.appendChild(budget);

const plotTitle = document.createElement('p');
plotTitle.classList.add('film-info__title');
plotTitle.innerText = 'Сюжет';
plot.append(plotTitle);

const plotInfo = document.createElement('p');
plotInfo.classList.add('film-info__text');
plotInfo.innerText = item.Plot;
plot.append(plotInfo);

const cardFooter = document.createElement('div');
cardFooter.classList.add('card__footer');
cardContainer.appendChild(cardFooter);

const cardButton = document.createElement('button');
cardButton.classList.add('card__button');
cardFooter.append(cardButton);

const svg = document.createElement('svg');
svg.classList.add('button__icon-svg');
cardButton.append(svg);

return cardContainer;
}

data.forEach((item) => {
filmList.appendChild(createFilmCard(item));
})
}
export { createDataFilms, getFilmCard, deleteCard };