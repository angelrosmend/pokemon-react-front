import axios from 'axios' 


export function getAllData(urls){
    return Promise.all(urls.map(fetchData));
}
export const getPokemonData = urls => Promise.all(urls.map(fetchData))