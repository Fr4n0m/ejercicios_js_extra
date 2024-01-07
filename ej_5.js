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

function addId(films) {
  for (let i = 0; i < films.length; i++) {
    films[i].id = i;
  }
  return films;

  /* return films.map((film, i) => ({
    ...film,
    id: i
  })); */
}

var filmsID = addId(films);

filmsID.forEach(film => console.log(film));
