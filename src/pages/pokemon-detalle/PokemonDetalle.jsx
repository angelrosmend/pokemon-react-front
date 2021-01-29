import React, { useContext } from 'react'
import { Spinner } from 'reactstrap'
import { PokemonContext } from '../../context/PokemonContext'
import { useFetchDetails } from '../../hooks/useFetchDetails'
import Description from './Description'
import './pokemon.detalle.css'
import SliderSprites from './SliderSprites'

function PokemonDetalle({match}) {
  const {language, text}=  useContext(PokemonContext)
    const id = match.params.id
    const pokemonDetail = `${process.env.REACT_APP_BASE_URL}pokemon/${id}`
    const {data, loading} = useFetchDetails(pokemonDetail, language)
 

    if(loading) return <Spinner style={{ position: 'absolute', width: '3rem', height: '3rem', top: '50%', left: '50%' }} color='danger'/>
    return (
        <div className='page-detalle'>
            <SliderSprites images={data[0].images}
                           habitat={data[0].habitat} /> 
            <Description idPokedex={id}
                         text={text}
                         name={data[0].name}
                         description={data[0].description}
                         types={data[0].types}
                         habitat={data[0].habitat}
                         height={data[0].height}
                         weight={data[0].weight}
                         language={language}/>
        </div>
    )
}

export default PokemonDetalle
