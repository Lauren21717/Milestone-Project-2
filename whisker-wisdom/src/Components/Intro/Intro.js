import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Intro.css'
import catBg2 from '../../assets/images/cat3.png';

const Intro = () => {
  return (
    <div className='container intro-container mt-lg-5 mt-4'>
      <h1 className='text-center fs-2 fw-bolder mb-2'>Welcome to Whisker Wisdom!</h1>
      <div className='row justify-content-center '>
        <div className='intro-text col-lg-6 py-3 rounded-5'>
          <p className='text-center fs-5 fw-medium'>Think you know everything about cats? Prove it! Our quiz features 10 fun multiple-choice questions with four possible answers each.</p>
        </div>
      </div>
      <img className='rounded mx-auto d-block img-fluid' src={catBg2} alt='' />
      <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white'>Let’s Start!</button>
    </div>
  )
}

export default Intro