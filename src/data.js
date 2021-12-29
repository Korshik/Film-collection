export function getFilmsCards(arr) {
    const filmsarr = arr
    let newarr = filmsarr.map((element) => {
  
      if (element.BoxOffice == 'N/A') {
        element.BoxOffice = 0
      }
  
      if (element.Released === null) {
        element.Released = '-'
      }
  
      if (element.Director === null) {
        element.Director = '-'
      }
  
      if (element.Plot.length >= 140) {
        element.Plot = element.Plot.slice(0, 137) + '...'
      }
  
      return element
    })
  
    sortingElements(newarr)
    getSearching(newarr)
  
    madeCardsFilms(newarr)
    saveChosenElement(newarr)
    selectChosenElement()
    return newarr
  }
//   export { getFilmsCards }