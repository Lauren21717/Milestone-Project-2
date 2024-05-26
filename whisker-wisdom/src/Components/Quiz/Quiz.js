import React, { useState, useEffect, useRef } from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import './Quiz.css'
import catBg4 from '../../assets/images/cat4.png';
import { data } from '../../assets/JS/data'

const Quiz = () => {

  const [questionIndex, setQuestionIndex] = useState(0);
  const [question, setQuestion] = useState(data[questionIndex]);
  const [lock, setLock] = useState(false)

  let option1 = useRef(null);
  let option2 = useRef(null);
  let option3 = useRef(null);
  let option4 = useRef(null);

  let option_arr = [option1, option2, option3, option4]

  useEffect(() => {
    setQuestion(data[questionIndex]);
  }, [questionIndex]);

  const checkAnswer = (option, ans) => {
    if (!lock) {
      if (question.ans === ans) {
        option.target.classList.add("bg-success");
        setLock(true);
      } else {
        option.target.classList.add("bg-danger");
        setLock(true);
        option_arr[question.ans-1].current.classList.add('bg-success')
      }
    } 
  };

  return (
    <div className='container quiz-container m-auto'>

      <div className='row'>
        <div className='col-2 pt-4 cat-image'>
          <img src={catBg4} className="img-fluid " alt="cat" />
        </div>
        <div className='question-title col-8 rounded-circle mt-3'>
          <h1 className='text-center mt-4 fw-bolder'>Question {questionIndex + 1}</h1>
        </div>
      </div>

      <h2 className='fs-3 text-center my-4'>{question.question}</h2>
      <ul className="list-group answer-list text-center fw-medium fs-3">
        <li onClick={(option) => { checkAnswer(option, 1) }} className="list-group-item custom-list-item mb-4 rounded py-4" ref={option1} >{question.option1}</li>
        <li onClick={(option) => { checkAnswer(option, 2) }} className="list-group-item custom-list-item mb-4 rounded py-4" ref={option2} >{question.option2}</li>
        <li onClick={(option) => { checkAnswer(option, 3) }} className="list-group-item custom-list-item mb-4 rounded py-4" ref={option3} >{question.option3}</li>
        <li onClick={(option) => { checkAnswer(option, 4) }} className="list-group-item custom-list-item mb-4 rounded py-4" ref={option4} >{question.option4}</li>
      </ul>


      <button className='rounded mx-auto d-block btn btn-lg px-5 fw-semibold text-white mt-1'>Next Question</button>
      <div className='text-center fs-5 '>{questionIndex + 1} of {data.length} question{data.length > 1 ? 's' : ''}</div>

    </div>
  )
}

export default Quiz