const BASE_API = 'https://pokeapi.co/api/v2/'
let pokemonContainer = document.querySelector("section")

async function getPokemons() {
    try {
        let resposta = await fetch(`${BASE_API}pokemon?limit=100`)
        let dados = await resposta.json()
        
        return dados.results
    } catch (e) {
        console.log(e)
    }
    /* .then(resposta => resposta.json())
    .then(dados => console.log(dados))
    .catch(e => console.log(e)) */
}

async function getPokemon(url) {
    try {
        let resposta = await fetch(url)
        let dados = await resposta.json()
        
        return dados
    } catch (e) {
        console.log(e)
    }
}

async function showPokemons() {
    let pokemons = await getPokemons()

    for(let item of pokemons) {
       let pokemon = await getPokemon(item.url)

       pokemonContainer.innerHTML += `
        <div class='pokemon-cards' id="${pokemon.name}">
            <img src="${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default}" 
                alt="${pokemon.name} nome" />
            <span>${pokemon.name}</span>
            <div class="types ${pokemon.name}"></div>
        </div>
       `
       pokemon.types.forEach(type => {
        let types = document.querySelector(`.${pokemon.name}`)
        let pokemonCard = document.getElementById(pokemon.name)

        pokemonCard.classList.add(type.type.name)
       
        types.innerHTML += `<span class="type ${type.type.name}">${type.type.name}</span>`
     })

    }
}

async function getPokemonPerTypes(type) {
    try {
        pokemonContainer.innerHTML = ""

        let resposta = await fetch(`${BASE_API}type/${type}`)
        let dados = await resposta.json()
        
        for(let item of dados.pokemon) {
            let pokemon = await getPokemon(item.pokemon.url)
            
     /* ?? coalescencia nula */
            pokemonContainer.innerHTML += `
             <div class='pokemon-cards ${type}'">
                 <img src="${pokemon.sprites.versions['generation-v']['black-white'].animated.front_default ??
                 pokemon.sprites.versions['generation-v']['black-white'].front_default
                }" 
                     alt="${pokemon.name} nome" />
                 <span>${pokemon.name}</span>
                 <div class="types ${pokemon.name}"></div>
             </div>
            `
            pokemon.types.forEach(type => {
             let types = document.querySelector(`.${pokemon.name}`)
            
             types.innerHTML += `<span class="type ${type.type.name}">${type.type.name}</span>`
          })
     
         }
        
    } catch (e) {
        console.log(e)
    }
}

getPokemons()
showPokemons()