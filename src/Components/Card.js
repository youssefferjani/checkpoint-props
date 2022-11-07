import React from 'react'
import './Card.css'
import img from '../youssef.jpg'

function Card({name,job,about}) {
   
  return (
    <div className="Card">
        <div className="upper-container">
        <div className="image-container">
            </div>
            </div>
        <div className="lower-container">
            <h3>{name}</h3>
            <h4>{job}</h4>
            <p>{about}</p>
            <img src={img} alt='...' />
            <button>Visit profile</button>
        </div>
    </div>
  )
}

export default Card