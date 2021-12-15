/**создать функцию которая будет отрисовывать, замоканные данные на странице. */
/*import{ maxLength }from './utils'*/
import { films } from './mock'
let createFilmCard = (obj) => {
  let template=document.getElementById('card-template')

  let deepClone = JSON.parse(JSON.stringify(template));
  let {films}=obj;
  deepClone.querySelector('.card-header__title').textContent=titles;
  deepClone.querySelector('.card-header__image').textContent=poster;
  deepClone.querySelector('.film-info__rating .film-info__text').textContent=rating;
  deepClone.querySelector('.film-info__plot .film-info__text').textContent=maxLength(plot);
  deepClone.querySelector('.film-info__release-date .film-info__text').textContent=releaseDate;/**localDateString() */
  deepClone.querySelector('.film-info__director .film-info__text').textContent=director;
  deepClone.querySelector('.film-info__box-office .film-info__text').textContent=`$${boxOffice.toString().match(/.{1,3}/g).join('.')}`;

return deepClone;
}



const renderCard = (filmData) => {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';
  const cardsItems = [];
  filmData.forEach((data) => {
    cardsItems.push(composeFilmCard(data));
  });
  filmList.append(...renderCard);
}


