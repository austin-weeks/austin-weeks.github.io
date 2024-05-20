const searchInput = document.getElementById("search-input");
const searchBtn = document.getElementById("search-button");
const nameDiv = document.getElementById("pokemon-name");
const idDiv = document.getElementById("pokemon-id");
const spriteDiv = document.getElementById("sprite-div");
const weightDiv = document.getElementById("weight");
const heightDiv = document.getElementById("height");
const typesDiv = document.getElementById("types");
const hpDiv = document.getElementById("hp");
const attackDiv = document.getElementById("attack");
const defenseDiv = document.getElementById("defense");
const specialAttackDiv = document.getElementById("special-attack");
const specialDefenseDiv = document.getElementById("special-defense");
const speedDiv = document.getElementById("speed");

const pokemonChoicesDiv = document.getElementById("pokemon-choices");
const showMoreBtn = document.getElementById("load-more-btn");

const baseUrl = "https://pokeapi-proxy.freecodecamp.rocks/api/pokemon/";

function onInput() {
    const input = searchInput.value.replace(/[^\d a-z -]/gi, "").toLowerCase();
    if (input === "") return;
    searchInput.value = "";

    processSearch(input);
}
async function processSearch(searchStr) {
    try {
        const data = await fetch(`${baseUrl}${searchStr}`);
        const json = await data.json();
        displayResult(json);
    } catch (error) {
        console.log(error);
        alert("Pokémon not found");
    }
}

function displayResult(pokeData) {
    window.scrollTo(0, 0);

    document.querySelector(".results").classList.remove("hidden");
    const { name, height, weight, id, sprites, stats, types } = pokeData;
    nameDiv.textContent = name.toUpperCase();
    idDiv.textContent = `#${id}`;
    heightDiv.textContent = `Height: ${height}`;
    weightDiv.textContent = `Weight: ${weight}`;
    spriteDiv.innerHTML = `<img src="${sprites["front_default"]}" alt="${name} sprite" id="sprite">`
    hpDiv.textContent = getStat("hp");
    attackDiv.textContent = getStat("attack");
    defenseDiv.textContent = getStat("defense");
    specialAttackDiv.textContent = getStat("special-attack");
    specialDefenseDiv.textContent = getStat("special-defense");
    speedDiv.textContent = getStat("speed");
    
    typesDiv.innerHTML = getTypesHTML();

    function getStat(statName) {
        return stats.find(el => el["stat"]["name"] === statName)["base_stat"];
    }
    function getTypesHTML() {
        let typeDivs = "";
        for (const type of types) {
            const typeName = type["type"]["name"];
            typeDivs += `<div class="type ${typeName}">${typeName.toUpperCase()}</div>`
        }
        return typeDivs;
    }
}

const optionsPerLoad = 40;
const maxID = 1025;
let startLoadAtID = 1;
async function loadOptions() {
    const pokemonJSON = await fetch(baseUrl);
    const pokemonList = await pokemonJSON.json();
    for (let i = startLoadAtID; i < startLoadAtID + optionsPerLoad; i++) {
        const pokemon = pokemonList["results"].find(el => el["id"] === i);
        pokemonChoicesDiv.innerHTML += `<button class="option" onclick="processSearch(${i})">${pokemon["name"].toUpperCase()}</button>`
    }
    startLoadAtID += 40
}

searchBtn.addEventListener("click", onInput);
searchInput.addEventListener("keydown", e => {
    if (e.key === "Enter") onInput();
});
showMoreBtn.addEventListener("click", loadOptions);
loadOptions();