import React from 'react'
import './Card.css'
function Card(props) {
  async function handleClick(e) {
    console.log(e.target.id)
  }
  return (
    <div className='card-wrapper'>
        <div className='main-card'>
            <h1 className='title-tag'>{props.title}</h1>
            <h3 className='desc-tag'>{props.desc}</h3>
            <h3 className='date-tag'>{props.date}</h3>
            <h3 className='venue-tag'>{props.venue}</h3>
            <button className='event-info' id={props._id} onClick={handleClick} > See More </button>
        </div> 
    </div>
  )
}
export default Card