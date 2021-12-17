const searchInput=document.querySelector('.search__input');
const sortingButtons=document.querySelectorAll('.sorting .button');
debugger
const createSearch=(render, data) =>{
    searchInput.addEventListener('keyup', (event)=>{
        const inputValue=event.target.value;
        if (inputValue){
            render (data.filter((data)=> data.titles.toLowerCase.includes(inputValue.toLowerCase())));
            sortingButtons.forEach((item)=> item.classList.remove('.button_cheked'));}
            if (!inputValue){
                return render(data);
            }
        });
    };
export{createSearch,sortingButtons, searchInput }