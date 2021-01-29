import {useEffect, useState} from 'react'
import axios from 'axios'

/*TRAE LA DATA DEL ENDPOINT INDIVIDUAL*/

export const useFetchDetails = (urlPoke, language) => {

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
          
             let results = response.data
             const { types, height, weight, sprites} = results

             let urlSpecies = response.data.species.url  /*FILTRA URL POKEMON-SPECIES PARA TRAER EL NOMBRE EN VARIOS IDIOMAS*/
             let urls = [urlSpecies]
             const fetchData = urls => axios.get(urls)
                                            .then(res => res.data)
                                            .catch(err=> err)
             const getPokemonData = urls => Promise.all(urls.map(fetchData))
            
             getPokemonData(urls, sprites, types, height, weight).then(data => {/*TRAE LA DATA DE SPECIES Y LA ORGANIZA*/
               const images = sprites
               let habitat = data[0].habitat
              let idPoke = data[0].id
               let description = data[0].flavor_text_entries.filter(flavor => flavor.version.name === 'alpha-sapphire').find(flavor => flavor.language.name === language )
               let name = data[0].names.find(name => name.language.name === language)
               function gatherPokemonData(id, name, images, description, types, habitat, height, weight, stats) {
                 let data = []

                data.push({     id,
                                name, 
                                images, 
                                description,
                                types,
                                habitat,
                                height,
                                weight })
                  return data   
               }
               let pokemonInfo = gatherPokemonData(idPoke, name.name, images, description, types, habitat, height, weight)
               setState({
                data: pokemonInfo,
                loading: false, 
                error: ''
               })
            })
             }).catch(error => {
                 setState({
                     data: [],
                     loading: false,
                     error: error
                 })
             }); 
            return () => cancel()           
    }, [urlPoke,language]); /*RENDERIZA EL COMPONENTE CADA VEZ QUE CAMBIEN EL URL O EL LENGUAJE*/
    return state
}