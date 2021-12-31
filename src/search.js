import { getFilmCard } from './render'
const input = document.querySelector('.search__input')
input.addEventListener('input', () => {
  getSearch();
});
inputClear.addEventListener('click', () => {
  input.value = '';
  inputClear = 'hidden';
  clearSearch()
})

export { searhFilms }
