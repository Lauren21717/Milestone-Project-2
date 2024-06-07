import React from 'react'
import { Link, useLocation } from 'react-router-dom'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Pass.css'
import catBg6 from '../../assets/images/cat6.png';

const Pass = () => {

  const location = useLocation();
  const { score } = location.state || { score: 0 };

  return (
    <div>
      <div className="container landing-container mt-5">
        <h1 className='display-5 text-center fw-bolder'>Good Job!</h1>
        <img className='rounded mx-auto d-block img-fluid' src={catBg6} alt='' />
        <div>
          <h3 className='fs-4 text-center'>Your marks is {score}/10</h3>
        </div>
        <Link to="/quiz" className="text-decoration-none">
          <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white my-4'>Take the quiz again</button>
        </Link>
        <Link to="/" className="text-decoration-none">
          <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white'>Back to home page</button>
        </Link>
      </div>
    </div>
  )
}

export default Pass