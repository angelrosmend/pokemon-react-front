import {useEffect, useState} from 'react'
import axios from 'axios'


/*TRAE LA DATA DEL ENDPOINT PRINCIPAL DE LISTA DE POKEMON CON PAGINADO*/

export const useFetch = (urlPoke, language) => {

    const [state, setState] = useState({data: [],
                                       loading: true,
                                       nextPage: null,
                                       prevPage: null,
                                       error: ''})

    useEffect(() => {
        let cancel 
        axios.get(urlPoke, {
                cancelToken: new axios.CancelToken(c => cancel = c)
             })
             .then(response => {
             let results = response.data.results                                                    
             let urls = results.map(item => item.url)  /*FILTRA URLS INDIVIDUALES DE LOS POKEMON*/
             const fetchPokemon = urlPokemon => axios.get(urlPokemon)
                                                     .then(pokemon => pokemon.data)
                                                     .catch(errPokemon => errPokemon)
             const getPokemonData = urls => Promise.all(urls.map(fetchPokemon))
             getPokemonData(urls).then(pokemonList =>{   /*HACE UN FETCH A CADA UNO DE LOS URLS INDIVIDUALES Y FILTRA LOS DATOS*/
                let ids = pokemonList.map(item => item.id)
                let sprites = pokemonList.map(item => item.sprites)
                let urlsSpecies = pokemonList.map(item => item.species.url)
               getPokemonData(urlsSpecies).then(dataSpecies =>{  /*HACE UN FETCH A CADA URL POKEMON-SPECIES PARA OBTENER EL NOMBRE EN VARIOS LENGUAJES*/
                let names = dataSpecies.map(pokemon => pokemon.names)
                                       .map(name => name
                                       .find(item => item.language.name === language))
                                       .map(nombre => nombre.name)
                
                
                function gatherPokemonData(arr1, arr2, arr3) {  /*ORGANIZA LA DATA OBTENIDA DE LAS LLAMADAS EN UN ARRAY DE POKEMON*/
                     let data = []
                     let i = 0
                     while(i < ids.length){
                         data.push({id: arr1[i], name: arr2[i], sprites: arr3[i]})
                         i++
                     }
                     return data
                 }
                 let list = gatherPokemonData(ids, names, sprites)
                 setState({
                    data: list,
                    loading: false,
                    nextPage: response.data.next,
                    prevPage: response.data.previous,
                    error: ''
                   })
                })
             })
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     nextPage: null,
                     prevPage: null,
                     error: error
                 })
             }); 
            return () => cancel()           
    }, [urlPoke, language]);  /*RENDERIZA LOS COMPONENTES CADA VEZ QUE CAMBIE EL URL O EL LENGUAJE SELECCIONADO*/
    return state
}

