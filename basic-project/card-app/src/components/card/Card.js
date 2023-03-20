import React from 'react'

function Card({title , text , images, children}) {
  return (
    <div className="card ms-3 mt-5" style={{width: "19rem"}}>
        <img src={images} className="card-img-top" alt="..." style={{width: "100%", height: "200px"}}/>
        <div className="card-body">
            <h5 className="card-title">{title}</h5>
            <p className="card-text">{text}</p>
        </div>
        {children}
   </div>
)
}

export default Card
