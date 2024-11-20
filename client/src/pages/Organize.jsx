import React, { useState } from 'react'
import './Organize.css'
import Navbar from '../components/Navbar'
import axios from 'axios'
import {useNavigate } from 'react-router-dom'
function Organize() {
    const navigate = useNavigate()
    const [title, setTitle] = useState("")
    const [desc, setDesc] = useState("")
    const [date, setDate] = useState("")
    const [venue, setVenue] = useState("")
    function handleTitle(e){
        setTitle(e.target.value)
    }
    function handleDesc(e){
        setDesc(e.target.value)
    }
    function handleDate(e){
        setDate(e.target.value)
    }
    function handleVenue(e){
        setVenue(e.target.value)
    }
    async function handleClick(e){
        e.preventDefault()
        const response = await axios.post("http://localhost:5000/main/organisePost", {title, desc, date, venue})
        alert(response.data.message)
        setDate("")
        setDesc("")
        setTitle("")
        setVenue("")
        navigate("/mainpage")
    }
  return (
    <div className='main-organise-page'>
        <Navbar/>
    <div className='organise-event-page'>
        <form className='organise-event-form'>
            <input placeholder='Title' className='event-title' onChange={handleTitle}/>
            <input placeholder='Description' type="text" className='event-desc' onChange={handleDesc}/>
            <input color='white' type="date" className='event-date' onChange={handleDate}/>
            <input placeholder='Venue' type="text" className='event-venue' onChange={handleVenue}/>
            <button className='submit-event' onClick={handleClick}>Organize event</button>
        </form>
    </div>
    </div>
  )
}

export default Organize
