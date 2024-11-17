import React from 'react'
import './Card.css'
function Card() {
  return (
    <div className='card-wrapper'>
        <div className='main-card'>
            <h1 className='title-tag'>Ttitle</h1>
            <h3 className='desc-tag'>Lorem, ipsum dolor sit amet consectetur adipisicing elit. Asperiores necessitatibus at sint nesciunt quisquam sed a, voluptatum quas accusantium. Nemo deleniti, provident nisi quam iste tempora dolorem dolorum? Porro, ipsum?</h3>
            <h3 className='date-tag'>Date</h3>
            <h3 className='venue-tag'>Venue</h3>
            <button className='event-info'>See More </button>

        </div> 
    </div>
  )
}
export default Card