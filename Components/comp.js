import React from 'react'
import "./comp.css"

const Comp = (props) => {
  return (
    <div className='box'>
        <h4>{props.name}</h4>
        <p>{props.clas}</p>
        <p>{props.place}</p>
        <p>{props.year}</p>
    </div>
  )
}

export default Comp