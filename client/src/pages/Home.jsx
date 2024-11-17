import React from 'react'
import Navbar from '../components/Navbar'
import FirstView from '../components/FirstView'

function Home() {
  return (
    <div>
      <Navbar  page="Login/Register" url = "/auth" contact ="Contact"/>
      <FirstView/>
    </div>
  )
}



export default Home
