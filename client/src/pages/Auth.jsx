import React, { useEffect, useState } from 'react'
import Navbar from '../components/Navbar'
import axios from 'axios'
import './Auth.css'
import {useCookies} from 'react-cookie'
import { useNavigate } from 'react-router-dom'
function Auth() {
  return (
    <div className='main-auth-wrapper'>
        <Navbar page="Home" url = "/" contact="Contact Us"/>
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
  const [_, setCookies] = useCookies(["access_token"])
  const navigate = useNavigate()
  function handleUsernameChange(e){
    setUsername(e.target.value)

  }
  function handlePasswordChange(e){
    setPassword(e.target.value)
  }

  async function handleClick(e){
    e.preventDefault()
    const response = await axios.post("http://localhost:5000/auth/login", {username: username, password: password})
    setCookies("access_token", response.data.token)
    window.localStorage.setItem("userID", response.data.userID)
   if(response.data.userID){
    navigate("/mainpage")
   }
   else{
    alert(response.data.message)
    setUsername("")
    setPassword("")
   }
    
  }
    return(
      <div className='main-login-wrapper'>
        <form className='register-form'>
                <h1>Login</h1>
                <input className='username' placeholder='Username' onChange={handleUsernameChange} value={username}/>
                <input className='password' placeholder='Password' onChange={handlePasswordChange} value={password}/>
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
      alert(response.data.message)
      setPassword("")
      setUsername("")
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
