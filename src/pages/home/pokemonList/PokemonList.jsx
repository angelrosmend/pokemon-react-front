import React from 'react'
import './pokemon-home.css'

function PokemonList(props) {
    return (
        <div className='pokemon-list'>
            <div className="cards-wrapper container-fluid align-items-center">
            {props.children}
            </div>
        </div>
    )
}

export default PokemonList
