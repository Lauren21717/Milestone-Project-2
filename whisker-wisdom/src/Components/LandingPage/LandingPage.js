import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './LandingPage.css'
import catBg from '../../assets/images/cat2.png';

const LandingPage = () => {
  return (
    <div className="container landing-container mt-5">
      <h1 className='display-5 text-center fw-bolder'>Whisker Wisdom</h1>
      <img className='rounded mx-auto d-block img-fluid' src={catBg}  alt=''/>
      <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white'>Let’s Start!</button>
    </div>
  )
}

export default LandingPage