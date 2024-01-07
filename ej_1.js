var films = [
  { title: "Película_1", type: "serie" },
  { title: "Película_2", type: "película" },
  { title: "Película_3", type: "serie" },
  { title: "Película_4", type: "serie" },
  { title: "Película_5", type: "documental" },
  { title: "Película_6", type: "serie" },
];

function determineType(title) {
  const findFilm = films.find((film) => film.title === title);

  findFilm
    ? console.log(`La ${title} es una ${findFilm.type}`)
    : console.log(`No se ha encontrado la película indicada.`);
}

determineType("Película_1");
determineType("Película_2");
determineType("Película_5");
determineType("Película_10");
