import { titles, directors, description } from './mock.js';

const createmockData = (ArrLength) => {
  let array = [...Array(ArrLength).keys()].map(
    (item, index) =>
      (item = {
        titles: titles[index],
        releaseDate: randomDate('01/01/1990', '01/01/2021') || '-',
        plot: description[randomInt(0, description.length - 1)] || '-',
        poster: `./images/posters/${index + 1}.jpg`,
        boxOffice: randomInt(300000000, 600000000) || 0,
        rating: random(1, 10).toFixed(1) || 0,
        directors: directors[index] || '-',
      })
  );
  return array;
};
export { createmockData };