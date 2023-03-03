const pokemonWrapper = document.getElementById("pokeWrapperID");
const pokemonNumber = 30;

function capitalize(string) {
  return string.charAt(0).toUpperCase() + string.slice(1);
}

const fetchPokemon = async (id) => {
  const url = `https://pokeapi.co/api/v2/pokemon/${id}`;
  const resolve = await fetch(url);
  const pokemon = await resolve.json();

  displayPokemon(pokemon);
};

const countPokemon = async () => {
  for (let i = 1; i <= pokemonNumber; i++) {
    await fetchPokemon(i);
  }
};
countPokemon();

function displayPokemon(pokemon) {
  const pokemonCard = document.createElement("div");
  pokemonCard.classList.add("pokemonCard");

  const pokemonName = pokemon.name[0].toUpperCase() + pokemon.name.slice(1);

  const pokemonHTML = 
  `<div class="pokemonIMG"><img src="${pokemon.sprites.other.dream_world.front_default}"</div>
  <div class="pokemonInfo">
    <h2 class="name">${pokemonName}</h2>
    <h3 class="type">Type: ${capitalize(pokemon.types[0].type.name)}</h3>
    <h3 class="ability">Abilities: ${capitalize(pokemon.abilities[0].ability.name)}</h3>
  </div>`;

  pokemonCard.innerHTML = pokemonHTML;

  pokemonWrapper.appendChild(pokemonCard);
}
