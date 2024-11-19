import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
import MainPage from './pages/MainPage'
import Organize from './pages/Organize'
function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/auth' element = {<Auth/>} />
          <Route path='/mainpage'  element={<MainPage/>}/>
          <Route path='/organize' element={<Organize/>} /> 
        </Routes>
      </Router>
    </div>
  )
}

export default App
