async function getPokemon(name) {
  await fetchData(name);
}

async function fetchData(name) {
  try {
    const url = `https://pokeapi.co/api/v2/pokemon/${name}`;
    const res = await fetch(url);
    const data = await res.json();

    console.log(`Información del Pokémon ${name}:`);
    console.log(data);
  } catch (error) {
    console.log(error);
  }
}

getPokemon("charmander");
getPokemon("pikachu");
