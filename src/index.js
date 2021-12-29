// import { createSorting } from './sorting.js'*/
import { getFilms, getToken } from "./api.js";
import { createDataFilms } from "./render.js";

getToken
.then((token) => getFilms(token))
.then((data) => createDataFilms(data))
.then(kek => console.log(kek));

