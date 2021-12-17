import{ maxLength }from './utils'

const composeFilmCard = (obj) => {
  let template=document.getElementById('card-template')
  let divClone=template.content.cloneNode(true);
  let {titles,poster, rating, releaseDate, director, plot, boxOffice}=obj;
  divClone.querySelector('.card-header__title').textContent=titles;
  divClone.querySelector('.card-header__image').textContent=poster;
  divClone.querySelector('.film-info__rating .film-info__text').textContent=rating;
  divClone.querySelector('.film-info__plot .film-info__text').textContent=maxLength(plot);
  divClone.querySelector('.film-info__release-date .film-info__text').textContent=releaseDate;/**localDateString() */
  divClone.querySelector('.film-info__director .film-info__text').textContent=director;
  divClone.querySelector('.film-info__box-office .film-info__text').textContent=`$${boxOffice.toString().match(/.{1,3}/g).join('.')}`;
  return divClone;
};

const renderCard = (filmData) => {
  const filmList = document.querySelector('.film-list');
  filmList.innerHTML = '';
  const cardsItems = [];
  filmData.forEach((data) => {
    cardsItems.push(composeFilmCard(data));
  });
  filmList.append(...renderCard);
}


