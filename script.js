const poke_container = document.getElementById('poke-container')
const pokemon_count = 150
const colors = {
    fire: '#FDDFDF',
    grass: '#DEFDE0',
    electric: '#FCF7DE',
    water: '#DEF3FD',
    ground: '#f4e7da',
    rock: '#d5d5d4',
    fairy: '#fceaff',
    poison: '#98d7a5',
    bug: '#f8d5a3',
    dragon: '#97b3e6',
    psychic: '#eaeda1',
    flying: '#F5F5F5',
    fighting: '#E6E0D4',
    normal: '#F5F5F5'
}

const main_types = Object.keys(colors)

const fetchPokemons = async () => {
    for (let i = 1; i <= pokemon_count; i++) {
        await getPokemon(i)
    }
}

const getPokemon = async (id) => {
    const url = `https://pokeapi.co/api/v2/pokemon/${id}`
    const res = await fetch(url)
    const data = await res.json()
    createPokemonCard(data)
}

const createPokemonCard = (pokemon) => {
    let type = pokemon.types[0].type.name
    
    let card = "<div  class='pokemon' style='background-color:" + colors[type] + "'>"
    card += "<div  class='img-container'>"
    card += '<img src=' + pokemon.sprites.front_default + ' alt="' + pokemon.name +'">'
    card += "</div>"
    card += "<div class='info'>"
    card += "<span class='number'>" + pokemon.id+"</span>"
    card += '<h3 class="name">'+pokemon.name+'</h3>'
    card += '<small class="type">Type: <span>'+ pokemon.types[0].type.name+'</span></small>'
    card += "</div>"
    card += "</div>"

    poke_container.innerHTML += card
}

fetchPokemons()