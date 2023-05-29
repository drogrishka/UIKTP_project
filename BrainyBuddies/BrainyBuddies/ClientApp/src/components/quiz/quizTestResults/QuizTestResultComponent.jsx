import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import './quizTestResult.css'
import { HiPlusCircle } from 'react-icons/hi'
import { HiMinusCircle } from 'react-icons/hi'
import { RiCloseCircleFill } from 'react-icons/ri'

const QuizTestResult = ({ toggleResult, correctAnswersCount }) => {

    return (
        <div className="quiz-test-result-dialog">
            <div className='quiz-test-result-content'>
                <div className='quiz-test-result'>
                    <div className='icons'>
                        <HiPlusCircle className='icon' />
                        <HiMinusCircle className='icon' />
                        <RiCloseCircleFill className='icon' onClick={toggleResult} />
                    </div>
                    <h2>Points</h2>
                </div>
                <div class='content'>
                    <p>{correctAnswersCount} correct answers</p>
                </div>
            </div>
        </div>

    );
}

export default QuizTestResult;
