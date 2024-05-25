import React from 'react'
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css'
import catBg3 from '../../assets/images/cat5.png';
import catBg4 from '../../assets/images/cat4.png';

const Quiz = () => {
  return (
    <div className='container quiz-container m-auto'>

      <div className='row'>
        <div className='col-2 pt-4 cat-image'>
          <img src={catBg4} className="img-fluid " alt="cat-image" />
        </div>
        <div className='question-title col-8 rounded-circle mt-3'>
          <h1 className='text-center mt-4 fw-bolder'>Question 1</h1>
        </div>
      </div>

      <h2 className='fs-3 text-center my-4'>Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nunc id leo quis diam faucibus ornare. Morbi quis viverra nibh, in iaculis enim. Nulla facilisi?</h2>
      <ul className="list-group answer-list text-center fw-medium fs-3">
        <li className="list-group-item custom-list-item mb-4 rounded py-4">Proin metus urna</li>
        <li className="list-group-item custom-list-item mb-4 rounded py-4">Proin metus urna</li>
        <li className="list-group-item custom-list-item mb-4 rounded py-4">Proin metus urna</li>
        <li className="list-group-item custom-list-item mb-4 rounded py-4">Proin metus urna</li>
      </ul>


      <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white mt-1'>Next Question</button>
      <div className='text-center fs-5 '>1 of 5 question</div>

    </div>
  )
}

export default Quiz