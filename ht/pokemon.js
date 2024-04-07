let list = document.querySelector("#list_container");
let filterByTypeBtn = document.querySelector("#filterByType");
let inputSearchField = document.querySelector("#inputSearch");

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  dark: "#8A8A8A",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#30336b",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#2d3436",
  water: "#0190FF",
  steel: "#71797E",
};

async function pokemonData(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  let data = await response.json();
  console.log(data);

  let card = document.createElement("div");
  card.classList.add("card");
  card.innerHTML = `<div class="card-inner">
                        <p class="hp">${data.stats[0].base_stat}</p>
                        <div class="imgDiv">
                            <img src="${data.sprites.front_default}" alt="">
                        </div>
                        <h2 class="pokeName">${data.name}</h2>
                        <div class="types">
                            <span>${data.types[0].type.name}</span>
                        </div>
                    </div>`;
  // Add color to types
  //   card.querySelector(".types").style.backgroundColor =
  //     typeColor[data.types[0].type.name];
  list.append(card);
}

async function pokemonIndex() {
  for (let i = 1; i <= 50; i++) {
    let index = pokemonData(i);
  }
}
pokemonIndex();
