const listaSelecaoPokemons = document.querySelectorAll('.pokemon')
const pokemonCard = document.querySelector('.pokemon-card')

listaSelecaoPokemons.forEach(pokemon =>{

    pokemon.addEventListener('click',() =>{
        //pegando a classe open e removendo ela
        const cartaoPokemonAberto = document.querySelector('.open')
        cartaoPokemonAberto.classList.remove('open')
        //pegando id do pokemon
        const idPokemonSelecionado = pokemon.attributes.id.value

        const idDoCartaoPokemonParaAbrir = idPokemonSelecionado + '-card'
        const CartaoPokemonParaAbrir = document.getElementById(idDoCartaoPokemonParaAbrir)

        CartaoPokemonParaAbrir.classList.add('open')
        const pokemonAtivoNaListagem = document.querySelector('.ativo')
        pokemonAtivoNaListagem.classList.remove('ativo')

        const pokemonSelecionadoNaListagem = document.getElementById(idPokemonSelecionado)
        pokemonSelecionadoNaListagem.classList.add('ativo')
    })
})