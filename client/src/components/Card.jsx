import React, { Component } from 'react'
import './Card.css'
import { Link } from 'react-router-dom'
import axios from 'axios'
import { useCookies } from 'react-cookie'
function Card(props) {
  const [cookies, _] = useCookies(["access_token"])
  async function handleClick(e) {
    console.log(e.target.id)
    const response = await axios.put(`http://localhost:5000/main/${e.target.id}`, {headers : {authorization: cookies.access_token}})
    console.log(response)
  }
  return (
    <div className='card-wrapper'>
        <div className='main-card'>
            <h1 className='title-tag'>{props.title}</h1>
            <h3 className='desc-tag'>{props.desc}</h3>
            <h3 className='date-tag'>{props.date}</h3>
            <h3 className='venue-tag'>{props.venue}</h3>
            <Link to={`/mainpage/${props._id}`} ><button className='event-info' id={props._id} onClick={handleClick} >See More  </button></Link>
        </div> 
    </div>
  )
}
export default Card