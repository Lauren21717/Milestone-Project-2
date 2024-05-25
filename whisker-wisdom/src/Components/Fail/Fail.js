import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Fail.css'
import catBg7 from '../../assets/images/cat7.png';

const Fail = () => {
    return (
        <div>
            <div className="container landing-container mt-5">
                <h1 className='display-5 text-center fw-bolder'>Good Job!</h1>
                <img className='rounded mx-auto d-block img-fluid' src={catBg7} alt='' />
                <div>
                    <h3 className='fs-4 text-center'>Your marks is 5/10</h3>
                </div>
                <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white my-4'>Take the quiz again</button>
                <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white'>Back to home page</button>
            </div>
        </div>
    )
}

export default Fail