function createFavorites(event){
const addFavorite=event.target.closest(".button_add");
const removeFavorite=event.target.closest(".button_remove");
const card=event.target.closest(".card");

if (addFavorite) {
    removeClass(addFavorite, addButtonClass)
}

}
/**## Реализовать функционал сохранения в избранное

Продумать механизм добавления\удаление в категорию избранное. */