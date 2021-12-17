const sortingButtons = document.querySelectorAll('.sorting .button');
const sortingPanel = document.querySelector('control-panel.sorting');

export const createSorting = data => {
  sortingPanel.addEventListener('click', event => {
    const { target } = event;
    let choice = event.target.id;

    if (choice === 'rating'){
      sortingButtons.forEach((item)=>item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      /**подключить render чтобы срортировать карточки фильмов */
    }
  })
}

if (choice==='releaseDate'){
  sortingButtons.forEach((item)=> item.classList.remove('button_checked'));
  target.classList.add('buttonb_checked');
  /**подключить рендрер с отсортированными карточками фильмов */
}

if (choice==='boxOffice'){
  sortingButtons.forEach((item)=> item.classList.remove('button_cheked'));
  target.classList.add('button_checked');
  /**рендер с карточками фильмов */
}
