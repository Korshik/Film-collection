import { getFilmCard, deleteCard } from './render.js'

// import { getSearching } from './function-search.js'

// import { selectChosenElement } from './save-chosen.js'

const ratingButton = document.getElementById('rating')
const realisedButton = document.getElementById('releaseDate')
const budgetButton = document.getElementById('boxOffice')
const sortingPanel = document.querySelector('.control-panel.sorting');
const sortingButtons = document.querySelectorAll('sorting .button');

function createSorting(array) {
  sortingPanel.addEventListener('click', (event) => {
    
    let { target } = event;
    let choice = event.target.id;

    if (choice === 'rating') {

      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');

      (array.sort((value1, value2) => value2.rating * 10 - value1.rating * 10));

    }
    if (choice === 'releaseDate') {

      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');

      (array.sort((data1, data2) => new Date(data2.releaseDate) - new Date(data1.releaseDate)));
    }
    if (choice === 'boxOffice') {

      sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');

      (array.sort((value1, value2) => value2.boxOffice - value1.boxOffice));
    }
  });
  return array
};
    

export { createSorting }
