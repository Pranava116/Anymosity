
import React from 'react'
import Navbar from '../components/Navbar.jsx'
import './MainPage.css'
import Card from '../components/Card.jsx'
function MainPage() {
  return (
	<div className = "Main-page-wrapper">
    <div className='main-page-navbar'>
      <Navbar page="Your Events" contact="Organize" url = "/" contactURL = "/organize" />
    </div>
    <Card/>
	</div>
  )
}

export default MainPage
