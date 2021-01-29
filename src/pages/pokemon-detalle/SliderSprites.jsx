import { Carousel } from 'react-bootstrap'
import React from 'react'

function SliderSprites({images, habitat}) {

    return (
    <div className="slider-container"  style={{backgroundImage:`url(/img/habitats/${habitat.name}.gif)`,
                                               backgroundSize: 'cover',
                                               height: '100vh'}}>
        <div className="slider-wrapper ">
          <Carousel>
            <Carousel.Item>
                <img className="d-block img-slider"  src={images.front_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_default} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.front_shiny} alt="First slide"/>
             </Carousel.Item>
             <Carousel.Item>
                <img className="d-block img-slider"  src={images.back_shiny} alt="First slide"/>
             </Carousel.Item>
              </Carousel>
        </div>
    </div>
    )
}

export default SliderSprites
