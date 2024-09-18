import React from 'react'

function HerosList(props) {
  return (
   
        <div className='list'>
      <img src={props.pic} alt=""></img>
      <h2>Name:{props.name}</h2>
      <h2>Age:{props.age}</h2>
      <h2>Profession:{props.profession}</h2>
      </div>
      
    
  )
}

export default HerosList
