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

function showFilmsByType(type) {
  const filteredFilms = films.filter((film) => film.type === type);

  if (filteredFilms.length === 0) {
    return console.log(`No hay películas del tipo "${type}".`);
  }

  const pluralType = type === "documental" ? "documentales" : `${type}s`;
  console.log(`Listado de ${pluralType}:`);

  filteredFilms.forEach((film, i) => {
    console.log(`${i + 1}: ${film.title}`);
  });
}

showFilmsByType("serie");
showFilmsByType("película");
showFilmsByType("documental");
showFilmsByType("ddocumenntal");
