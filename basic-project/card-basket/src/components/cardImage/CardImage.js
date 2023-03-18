import React from 'react';
import './cardImage.css'

function CardImage({image}) {
  return (
    <div className='card-image'>
      <img src={image} alt="img"></img>
    </div>
  )
}

export default CardImage
