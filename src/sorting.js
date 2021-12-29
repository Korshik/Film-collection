import { myFilmList } from './api.js';
import { createCard } from './render.js'

const ratingButton = document.getElementById('rating');
const releaseButton = document.getElementById('releaseDate');
const budgetButton = document.getElementById('boxOffice')

const checkButton = "button_checked";
const ratingField = "imdbRating";

ratingButton.addEventListener("click", sortedRating);
releaseButton.addEventListener("click", sortedReleaseDate);
budgetButton.addEventListener("click", sortedByBudget);

function removeAllClasses() {
  document.querySelectorAll(".card").forEach(element => element.remove());
}

function removeClass(element, remove) {
  if(element.classList.contains(remove)) {
      element.classList.remove(remove);
  }
}
function addClass(element, add) {
  if (!element.classList.contains(add)) {
      element.classList.add(add);
  }
}
function sortedByItem(item) {
  return (a, b) => a[item] < b[item] ? 1 : -1;
}

function sortedRating() {
  removeClass(releaseButton, checkButton);
  removeClass(budgetButton, checkButton);
  addClass(ratingButton, checkButton);
  removeAllClasses();
  createCard(myFilmList.sort(sortedByItem(ratingField)));
}
function sortedReleaseDate(){
  removeClass(ratingButton, checkButton);
  removeClass(budgetButton, checkButton);
  addClass(releaseButton, checkButton);
  removeAllClasses();
  createCard (myFilmList.sort(function (a, b){
    return new Date(b.Released).getTime() - new Date(a.Released).getTime()
  }));

}
function sortedByBudget(){
  removeClass(releaseButton, checkButton);
  removeClass(ratingButton, checkButton);
  addClass(budgetButton, checkButton);
  removeAllClasses();
  showFilmList(myFilmList.sort(function(a,b){
    return b.Budget.replace(/\D/g,'') - a.Budget.replace(/\D/g,'')
  }));
}
export {showFilmList} 