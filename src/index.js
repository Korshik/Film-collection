// import { createSorting } from './sorting.js'*/
import { getFilms, getToken } from "./api.js";
import { createDataFilms, getFilmCard } from "./render.js";
// import {sortedRating} from './'
getToken
.then(getFilms)
.then(createDataFilms)
.then(getFilmCard)

