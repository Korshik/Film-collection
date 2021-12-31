import { getFilms, getToken } from "./api.js";
import { createDataFilms, getFilmCard } from "./render.js";
import { createSorting } from "./sorting.js";
getToken
.then(getFilms)
.then(createDataFilms)
.then(getFilmCard)
.then(createSorting);

createSorting(getFilmCard)
