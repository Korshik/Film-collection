import { films } from './mock.js';
import { getRandomBetween } from './utils';

const createmockData = (array) => {
  let newArray = array.map((item) => {
    const randomFilm = films[getRandomBetween(0,9)];
    (item = {
      title = [index],
      releaseDate = /**генерация случайной даты в диапазоне 01.01.1990-01.01.2021  или - */


    })

    return {
      ...randomFilm,
      ...item,
    }
  });
  return array;
};
export { createmockData };