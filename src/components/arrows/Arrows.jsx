import React from 'react'
import './arrows.css'

export function PrevArrow(props) {
    const { style, onClick } = props;
    return (
        <i
        className={'fas fa-angle-left a-prev'}
        style={{ ...style, display: "block",  }}
        onClick={onClick}
      />
    )
}


export function NextArrow(props) {
  const { style, onClick } = props;
  return (
      <i
      className='fas fa-angle-right a-next'
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />

  )
}

export function PrevArrowOtros(props) {
  const { style, onClick } = props;
  return (
      <i
      className={'fas fa-angle-left a-prev-otros'}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  )
}

export function NextArrowOtros(props) {
    const { style, onClick } = props;
    return (
        <i
        className='fas fa-angle-right a-next-otros'
        style={{ ...style, display: "block"}}
        onClick={onClick}
      />
  
    )
}

export function PrevArrowC(props) {
  const { style, onClick } = props;
  return (
      <i
      className={'fas fa-angle-left a-prev-c'}
      style={{ ...style, display: "block",  }}
      onClick={onClick}
    />
  )
}

export function NextArrowC(props) {
  const { style, onClick } = props;
  return (
      <i
      className='fas fa-angle-right a-next-c'
      style={{ ...style, display: "block"}}
      onClick={onClick}
    />

  )
}