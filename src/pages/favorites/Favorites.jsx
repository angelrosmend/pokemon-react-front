import React, { useContext } from 'react'
import { backgroundIicon } from '../../assets/img'
import { PokemonContext } from '../../context/PokemonContext'
import PokemonCard from '../home/pokemonList/PokemonCard'
import './favorites.css'

function Favorites() {
   const {favoritosPokemon: favorites, text, language} = useContext(PokemonContext)

   const textEmpty = text.empty.find(item => item.id === language).name
   
   
    return (
        <div className='favorites-wrapper'>
            <img className='background-icon' src={backgroundIicon} alt=""/>
          
            {favorites.length < 1 ?
            <h1 className='text-white m-auto' style={{zIndex: '1'}}>{textEmpty}</h1>:
            favorites && favorites.map(favorite => {
                const {id} = favorite
                const isFavorite =  favorites.map(item=> item.id).includes(id)
                return <PokemonCard key={id}
                                    pokemon={favorite}
                                    favorite={isFavorite}/>
            })}
        </div>
    )
}

export default Favorites
