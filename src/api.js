export const getToken = fetch("https://fe08-films.herokuapp.com/auth", {
  method: "POST",
}).then((response) => {
    return response.json();
  })
  .then((data) => {
    let gottenToken = Object.values(data);
    const token = `Beare ${gottenToken[0]}`;
    return token;
    // return getFilms(token);
  });

export async function getFilms(token) {
  return await fetch("https://fe08-films.herokuapp.com/films", {
    method: "GET",
    headers: {
      "Content-Type": "application/json",
      Autorization: `${token}`,
    },
  })
  .then(response => response.json())
  .then(data => data["films"]);

  
}

