const sortingButtons = document.querySelectorAll('.sorting .button');
const sortingPanel = document.querySelector('.control-panel.sorting');

const createSorting = (render, data) =>{ 
 sortingPanel.addEventListener('click', (event) =>{
    let {target} = event;
    let choice = event.target.id;
    sortingButtons.forEach((item) => item.classList.remove('button_checked'));
      target.classList.add('button_checked');
      
 })
}