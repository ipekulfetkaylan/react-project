import React from 'react'

function Button({onClick}) {
  return (
    <button className='btn btn-primary'onClick={onClick}>Sepete Ekle</button>
  )
}

export default Button
