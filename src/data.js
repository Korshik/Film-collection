import { films } from './mock.js';
import { getRandomBetween } from './utils';

const createmockData = (array) => {
  let newArray = array.map((item) => {
    const randomFilm = films[getRandomBetween(0,9)]

    return {
      ...randomFilm,
      ...item,
    }
  });
  return array;
};
export { createmockData };