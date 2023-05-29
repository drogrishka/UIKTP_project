import React, { useEffect, useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './quiz.css';
import QuizTestResult from './quizTestResults/QuizTestResultComponent'
import { AiOutlineArrowLeft } from 'react-icons/ai'

const Quiz = () => {
    const { id } = useParams();
    const navigate = useNavigate();
    const username = sessionStorage.getItem('username');

    const [questions, setQuestions] = useState([]);
    const [correctAnswersCount, setCorrectAnswersCount] = useState(0);
    const [showResult, setShowResult] = useState(false);
    const toggleResult = () => {
        setShowResult(!showResult);
      };
    useEffect(() => {
        // Fetch quiz questions from the server
        const fetchQuizData = async () => {
            try {
                const response = await fetch(`/api/quiz/${id}`);
              if (response.ok) {
                const data = await response.json();
                const fetchedQuestions = data.Questions.$values;
          
                const transformedQuestions = fetchedQuestions.map((question) => ({
                  idQuestion: question.IdQuestion,
                  questionText: question.QuestionText,
                  questionAnswer: question.CorrectAnswer,
                  Answer1: question.WrongQuestion1,
                  Answer2: question.WrongQuestion2,
                  Answer3: question.WrongQuestion3,
                  answers: [], // Add code to populate answers array if available
                }));
          
                setQuestions(transformedQuestions);
                console.log(transformedQuestions);
              } else {
                console.log('Failed to fetch quiz data');
              }
            } catch (error) {
              console.log('Error fetching quiz data:', error);
            }
          };
        fetchQuizData();
    }, []);

    const handleFormSubmit = (event) => {
        event.preventDefault();
        let count = 0;
        questions.forEach((question) => {
            const selectedAnswer = document.querySelector(`input[name=question-${question.idQuestion}]:checked`);
            if (selectedAnswer && selectedAnswer.value === question.questionAnswer) {
                count++;
            }
        });
        setCorrectAnswersCount(count);
        // Open a pop-up box or show the count using any preferred UI component/library
        
        toggleResult();
    };

      

    return (
        <div className="quiz-grid-container">
            <div className="quiz-grid-item" id="QuizItem1">
                <img
                    src="https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__"
                    width={'278px'}
                    height={'197px'}
                    alt="Brainy Buddies"
                />
                <h3>Brainy Buddies</h3>
                <a href="/lessonPlans"><AiOutlineArrowLeft class='icon'/></a>

                <h2>Welcome to the quiz!</h2>
            </div>
            <div className="quiz-grid-item" id="QuizItem2">
                <div></div>
                <div className="lang">
                    <a href="#">MK</a>
                    <a href="#">EN</a>
                </div>
                <div></div>
                <div className="sign up">
                    {username ? (
                        <p>Hello, {username}</p>
                    ) : (
                        <>
                            {/* <button onClick={toggleLogin}>Log In</button>
                            <button onClick={toggleSignUp}>Sign Up</button> */}
                        </>
                    )}
                </div>
            </div>
            <div className="quiz-grid-item" id="QuizItem3">
                <form onSubmit={handleFormSubmit}>
                    <div className="flex-left">
                        {Array.isArray(questions) && questions.length > 0 ? (
                            questions.map((question, index) => (

                                <div key={question.idQuestion}>
                                    <legend>{`Q${index + 1}: ${question.questionText}`}</legend>
                                    <div>
                                                <input
                                                    type="radio"
                                                    id="wrongAnswer1"
                                                    name={`question-${question.idQuestion}`}
                                                    value={question.Answer1}
                                                />
                                    <label for="wrongAnswer2">{question.Answer1}</label>
                                    <input
                                                    type="radio"
                                                    id='wrongAnswer2'
                                                    name={`question-${question.idQuestion}`}
                                                    value={question.Answer2}
                                                />
                                    <label for='wrongAnswer1'>{question.Answer2}</label>
                                    <input
                                                    type="radio"
                                                    id='wrongAnswer3'
                                                    name={`question-${question.idQuestion}`}
                                                    value={question.Answer3}
                                                />
                                    <label for='wrongAnswer3'>{question.Answer3}</label>
                                    <input
                                                    type="radio"
                                                    id='questionAnswer'
                                                    name={`question-${question.idQuestion}`}
                                                    value={question.questionAnswer}
                                                />
                                    <label htmlFor="wrongAnswer2">{question.Answer1}</label>
                                    </div>
                                </div>
                            ))
                        ) : (
                            <div>Loading questions...</div>
                        )}
                    </div>
                    <div>
                        <button type="submit" id="submitBtn">Submit</button>
                    </div>
                </form >
            </div >
            {showResult && <QuizTestResult toggleResult={toggleResult} correctAnswersCount={correctAnswersCount} />}
        </div >
    );
};

export default Quiz;