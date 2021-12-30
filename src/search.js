const searchInput=document.querySelector('.search__input');
const sortingButtons=document.querySelectorAll('.sorting .button');
searchInput= document.addEventListener('input');
searchInput.value = '';




function submit(evt) {
    evt.preventDefault();
  }
  function filter(evt) {
    evt.preventDefault();
    const input = document.querySelector('.search__input');
    const inputValue = input.value.toUpperCase(); 
    const cards = document.querySelectorAll('.card');
    cards.forEach(
      function getMatch(info) {
        heading = info.querySelector('h2');
        headingContent = heading.innerHTML.toUpperCase();
      }
    )
  }





export { createSearch, sortingButtons, searchInput }