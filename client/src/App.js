import React from 'react'
import { BrowserRouter as Router, Routes, Route} from 'react-router-dom'
import Home from './pages/Home'
import Auth from './pages/Auth'
function App() {
  return (
    <div className='main-wrapper'>
      <Router>
        <Routes>
          <Route path='/' element = {<Home/>}/>
          <Route path='/auth' element = {<Auth/>} />
        </Routes>
      </Router>
    </div>
  )
}

export default App
