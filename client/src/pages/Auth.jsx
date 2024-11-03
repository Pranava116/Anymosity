import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './Auth.css'
function Auth() {
  return (
    <div className='main-auth-wrapper'>
        <Navbar page="Home" url = "/"/>
        <div className='login-reg-wrapper'>
        <Login/>
        <Register/>
        </div>
    </div>
  )
}
function Login(){
  const [username, setUsername] = useState("")
  const [password, setPassword] = useState("")

  function handleUsernameChange(e){
    setUsername(e.target.value)

  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  async function handleClick(e){
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/auth/login", {username: username, password: password})
    console.log(response)
  }
    return(
      <div className='main-login-wrapper'>
        <form className='register-form'>
                <h1>Login</h1>
                <input className='username' placeholder='Username' onChange={handleUsernameChange}/>
                <input className='password' placeholder='Password' onChange={handlePasswordChange}/>
                <button className='submit' onClick={handleClick}>Submit</button>
            </form>
      </div>
    )
  }

function Register(){
    const [username, setUsername] = useState("")
    const [password, setPassword] = useState("")

    function handleUsernameChange(e){
        setUsername(e.target.value)
    }
    function handlePasswordChange(e){
        setPassword(e.target.value)
    }

     async function handleClick(e){
      e.preventDefault()
      const response = await axios.post("http://localhost:5000/auth/register", {username: username, password: password})
      console.log(response.data.message)
    }

    
    return(
        <div className='main-register-wrapper'>
            <form className='register-form'>
                <h1>Register</h1>
                <input className='username' placeholder='Username' onChange={handleUsernameChange} value={username}/>
                <input className='password' placeholder='Password' onChange={handlePasswordChange} value={password}/>
                <button className='submit' onClick={handleClick}>Submit</button>
            </form>
        </div>
    )
}
export default Auth
