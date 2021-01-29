import React,{ useState} from 'react'
import { useFetch } from '../hooks/useFetch';
import textLang from '../helpers/languages/textLang.json'
export const PokemonContext = React.createContext(null)

export const PokemonContextProvider = (props) => {

  /*CONFIG IDIOMA*/
    const español = 'es'
    const english = 'en'
    const deutsch = 'de'
    const [language, setLanguage] = useState(español)
    const selectEn = () => setLanguage(english)
    const selectEs = () => setLanguage(español)
    const selectDe = () => setLanguage(deutsch)
    const text = textLang

    /*CONFIG FETCH Y PAGINADO*/
    const pokemonUrl = `${process.env.REACT_APP_BASE_URL}pokemon?limit=10&offset=0`
    const [currentPage, setCurrentPage] = useState(pokemonUrl)

    const {data,  prevPage, nextPage, loading} = useFetch(currentPage, language)

    const gotoNextPage = () => setCurrentPage(nextPage)
    const gotoPrevPage = () => setCurrentPage(prevPage)

    /*CONFIG FAVORITOS*/

    const [favoritosPokemon, setFavoritosPokemon] = useState([])
  
    const likePokemon = (pokemon) => setFavoritosPokemon([...favoritosPokemon, {...pokemon, favorite: pokemon.favorite = true}]);
    
    const unlikePokemon = (pokemon) => {
      setFavoritosPokemon((currentFav )=> {
        const indexPokemon = currentFav.findIndex(favPoke => favPoke.id === pokemon.id)
        if(indexPokemon === -1)return currentFav
        return [
          ...currentFav.slice(0, indexPokemon),
          ...currentFav.slice(indexPokemon + 1)
        ]
      })
    }

    
    return (
      <PokemonContext.Provider value={{data, gotoNextPage, gotoPrevPage, loading, nextPage, prevPage, language, selectEn, selectEs, selectDe, text, likePokemon, favoritosPokemon, unlikePokemon}}>
        {props.children}
      </PokemonContext.Provider>
    );
  };

