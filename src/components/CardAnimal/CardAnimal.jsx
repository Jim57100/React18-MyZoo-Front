import React from 'react';

const CardAnimal = (props) => {

  return (
    <>
      <div className="animal_card_container text-center mb-3">
          <img 
            src={props.thumbnail} 
            alt={`image d'un ${props.name}` }
            style={{height: 300, width: 300}} 
            className="img-fluid" 
          />
          <h3 style={{"color": 'black', "textAlign": "center"}}>{props.name}</h3>
      </div>
    </>
  )
}

export default CardAnimal;