import React from 'react'


function Description({idPokedex, name, description,types, text, habitat: Habitat,height,weight, language}) {

    const data = text.habitat.find(item => item.name === Habitat.name).languages.find(item => item.id === language)
    const {text: title, name:location} = data
    const heightText = text.height.find(item => item.id === language).name
    const weightText = text.weight.find(item => item.id === language).name
  

    return (
    <div className="description-container">
        <h1 className='titulo-pokemon text-center'>{name}</h1>
        <br/>
        <div className="info-tabla">
        <p className='text-white text-center'>{description.flavor_text}</p>
        <div className="tabla-detalle ">
            <div className="table-det ">
                <div className="det ">
                <p className='text-white'><b className='subtitle'>Pokedex Nº</b> {idPokedex}</p>
                <p className='text-white'><b className='subtitle'>{title}</b> {location}</p>
                </div>
                <div className="det">
               <p className='text-white'><b className='subtitle'>{heightText}</b> {height}´</p>
                <p className='text-white'><b className='subtitle'>{weightText}</b> {weight / 5}kg</p> 
                </div>
            </div>
            <div className="types">
                <div className="types-wrapper">
                { types && types.map( type =>{
                    return <img className='type-icon' src={`/img/types/${type.type.name}.png`} alt=""/>
                }
                )}
                </div>
            </div>
        </div>
        </div>
       
    </div>
    )
}

export default Description
