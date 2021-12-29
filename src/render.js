// import { maxLength } from "./utils.js";

const filmList = document.querySelector(".film-list");

function deleteCard() {
  const card = document.querySelectorAll(".card");
  for (let i = 0; i < card.length; i++) {
    card[i].remove();
  }
}

function createDataFilms(data) {
  const getArray = data;
  let gottenArray = getArray.map((element) => {
    if (element.BoxOffice === "N/A") {
      element.BoxOffice === 0;
    }

    if (element.Released === null) {
      element.Released = "-";
    }

    if (element.Director === null) {
      element.Director = "-";
    }

    if (element.Plot.length >= 140) {
      element.Plot = element.Plot.slice(0, 137) + "...";
    }

    return element;
  });

  // sortingElements(gottenArray)
  // getSearching(gottenArray)

  // madeCardsFilms(gottenArray)
  // saveChosenElement(gottenArray)
  // selectChosenElement()
  return gottenArray;
}

function getFilmCard(data) {
  let elemTemplate = document.querySelector("#card-template");
  data.forEach((item) => {
    let clonElements = elemTemplate.content.cloneNode(true);
    clonElements.querySelector(".card-header__image").src = item.Poster;
    const title = clonElements.querySelector(".card-header__title");
    title.textContent = item.Title;
    const rating = clonElements.querySelector(
      ".film-info__rating.film-info__text"
    );
    rating.textContent = item.imdbRating;
    const realizDate = clonElements.querySelector(
      ".film-info__release-date>.film-info__text"
    );
    realizDate.textContent = item.Released;
    const director = clonElements.querySelector(
      ".film-info__director.film-info__text"
    );
    director.textContent = item.Director;
    const budget = clonElements.querySelector(
      ".film-info__box-office.film-info__text"
    );
    budget.textContent = `${item.BoxOficce}`;
    const description = clonElements.querySelector(
      ".film-info__box-office.film-info__text"
    );
    description.textContent = maxLength(Plot);
    т;
    filmList.appendChild(clonElements);
  });
  // return getFilmCard;
}

export { createDataFilms, getFilmCard, deleteCard };
