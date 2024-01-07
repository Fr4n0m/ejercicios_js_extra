var films = [
  { title: "Película_1", type: "serie" },
  { title: "Película_2", type: "película" },
  { title: "Película_3", type: "serie" },
  { title: "Película_4", type: "serie" },
  { title: "Película_5", type: "documental" },
  { title: "Película_6", type: "serie" },
  { title: "Película_7", type: "película" },
  { title: "Película_8", type: "documental" },
];

function addFilm(newFilm) {
  const filmExist = films.some((film) => film.title === newFilm.title);

  filmExist
    ? alert(`La película ${newFilm.title} ya existe en la lista.`)
    : films.unshift(newFilm) &
      console.log(`Película ${newFilm.title} añadida con éxito`);
}

const newFilm = {
  title: "Nueva_Pelicula",
  type: "película",
};

const newFilm_Alert = {
  title: "Película_1",
  type: "serie",
};

addFilm(newFilm);
addFilm(newFilm_Alert);

function addId(films) {
  for (let i = 0; i < films.length; i++) {
    films[i].id = i;
  }
  return films;
}

var filmsID = addId(films);

console.log(films);
