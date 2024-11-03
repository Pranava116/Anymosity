import React from 'react'
import './FirstView.css'
function FirstView() {
  return (
    <div className='main-firstview-wrapper'>
        <div className='firstview-wrapper'>
            <div className='text-info'>
                <h1>A Hub for Every Perspective</h1>
                <p>Discover your community on [Your App Name]! Share insights, engage in lively discussions, and connect with like-minded individuals across diverse topics. Join us and be part of the conversation</p>
            </div>
            <div className='btn-firstview'>
                <button className='btn-firstview-login'><a href='/auth'>Continue</a></button>
            </div>
        </div>
    </div>
  )
}

export default FirstView
