
const pokemonList = document.getElementById('pokemonList')
const loadMoreButton = document.getElementById('loadMoreButton')

const maxRecores = 151
const limit = 10
let offset = 0




function loadPokemonsItems(offset, limit ){

   
    pokeApi.getPokemons(offset, limit).then((pokemons = []) => {
       const newhtml = pokemons.map((pokemon) =>
       `<li class="pokemon ${pokemon.type}">
        <span class="number">${pokemon.number}</span>
        <span class="name">${pokemon.name}</span>
        
        <div class="detail">
            <ol class="types">
               ${pokemon.types.map((type) => `<li class="type">${type}</li>`).join('')}
            </ol>
            <img src="${pokemon.photo}" alt=${pokemon.name}>
        </div>
    
    </li>`).join('')
    pokemonList.innerHTML += newhtml
       
    
        })
}
loadPokemonsItems(offset, limit)

loadMoreButton.addEventListener('click', () => {
    offset += limit
   
    const qtdRecordNextPage = offset + limit

    if(qtdRecordNextPage >= maxRecores){
        const newLimit = maxRecores - offset
        loadPokemonsItems(offset, newLimit)

        loadMoreButton.parentElement.removeChild(loadMoreButton)
    }else{
        loadPokemonsItems(offset, limit)
    }
    
})

   



