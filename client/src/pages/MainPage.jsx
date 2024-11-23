
import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar.jsx'
import './MainPage.css'
import Card from '../components/Card.jsx'
import axios from 'axios'
import { useCookies } from 'react-cookie'
function MainPage() {
  const [cards, setCards] = useState([])
  const [cookies, _] = useCookies(["access_token"])
  async function GetCards(){
    const response = await axios.get("http://localhost:5000/main/getevents")
    setCards(response.data)
    console.log(cards)
  }
  useEffect(()=>{
    GetCards()
  }, [])
  return (
	<div className = "Main-page-wrapper">
    <div className='main-page-navbar'>
      <Navbar page="Your Events" contact="Organize" url = "/" contactURL = "/organize" />
    </div>
    {cards.map(({title, desc, date, venue, _id}) =>{
      return(
        <div>
          <Card title={title} desc={desc} date={date} venue={venue} _id = {_id}/>
        </div>
      )
    })}
    <Card/>
	</div>
  )
}

export default MainPage
