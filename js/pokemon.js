let list = document.querySelector("#list_container");
let filterByTypeBtn = document.querySelector("#filterByType");
let inputSearchField = document.querySelector("#inputSearch");
let selectType = document.querySelector("#selectTag");

const typeColor = {
  bug: "#26de81",
  dragon: "#ffeaa7",
  dark: "#8A8A8A",
  electric: "#fed330",
  fairy: "#FF0069",
  fighting: "#7974af",
  fire: "#f0932b",
  flying: "#81ecec",
  grass: "#00b894",
  ground: "#EFB549",
  ghost: "#a55eea",
  ice: "#74b9ff",
  normal: "#95afc0",
  poison: "#6c5ce7",
  psychic: "#a29bfe",
  rock: "#9c8b52",
  water: "#0190FF",
  steel: "#71797E",
};

// Main Function
async function pokemonIndex() {
  for (let i = 1; i <= 150; i++) {
    let index = await pokemonData(i);
    createCardElement(index);
    // console.log(index);
  }
}
window.onload = function () {
  pokemonIndex();
};

// 1 function
async function pokemonData(id) {
  let response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}/`);
  let data = await response.json();
  return data;
}

// 2 function
function createCardElement(data) {
  let cardEle = document.createElement("div");
  cardEle.classList.add("card");

  const str = data.name;
  const firstLetter = str.charAt(0);
  const firstLetterCap = firstLetter.toUpperCase();
  const remainingLetters = str.slice(1);
  const capitalizedWord = firstLetterCap + remainingLetters;

  // Card Header
  cardEle.innerHTML = `<div class="card-inner">
    <p class="hp">HP ${data.stats[0].base_stat}</p>
    <div class="imgDiv"> <img src="${data.sprites.front_default}" alt=""> </div> 
    <h2 class="pokeName">${capitalizedWord}</h2>
    <div class="types"> <span>${data.types[0].type.name}</span> </div>
  </div>`;

  list.append(cardEle);

  let cardTypes =
    document.getElementsByClassName("types")[list.childElementCount - 1];

  cardTypes.style.backgroundColor =
    typeColor[data.types[0].type.name] || "grey"; // if the type is not in our color object

  let cardFrame =
    document.getElementsByClassName("card")[list.childElementCount - 1];
  // console.log(document.getElementsByClassName("types")[list.childElementCount - 1]);

  // converting HEX to RGB
  let colorName = typeColor[data.types[0].type.name];
  let newRGBColor = hex2RGB(colorName);

  cardFrame.style.background =
    `radial-gradient(circle at 50% 0%, ${newRGBColor} 36%, rgb(255, 255, 255) 36%)` ||
    "grey";
}

function hex2RGB(hex) {
  const clrR = parseInt(hex.slice(1, 3), 16);
  const clrG = parseInt(hex.slice(3, 5), 16);
  const clrB = parseInt(hex.slice(5, 7), 16);
  const colour = `rgb(${clrR}, ${clrG}, ${clrB})`;

  return colour;
}

inputSearchField.addEventListener("input", (e) => {
  let filter = document.getElementsByClassName("card");

  let pokeArray = Array.from(filter);
  pokeArray.forEach((ele) => {
    let pokeName = ele.children[0].children[2].innerText.toLowerCase();
    if (pokeName.startsWith(inputSearchField.value.toLowerCase())) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});

filterByTypeBtn.addEventListener("click", (e) => {
  let filterType = document.getElementsByClassName("card");

  let pokeArray = Array.from(filterType);
  pokeArray.forEach((ele) => {
    let pokeType = ele.children[0].children[3].innerText.toLowerCase();
    if (pokeType == selectType.value.toLowerCase()) {
      ele.style.display = "block";
    } else {
      ele.style.display = "none";
    }
  });
});

// selectType.addEventListener("change", (e) => {
//   // filterByTypeBtn.click();
// });
