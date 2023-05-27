import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './quizResults.css'


const QuizResults = () => {
    const usenavigate = useNavigate();
    const username = sessionStorage.getItem('username');

    const [quizResults, setQuizResults] = useState([])

    // useEffect(() => {
    //     fetch("api/quizResults/GetQuizResults")
    //         .then(response => { return response.json() })
    //         .then(responseJson => {
    //             setQuizResults(responseJson)
    //         })
    // }, [])


    return (
        <div class="quiz-results-grid-container">
            <div class="quiz-results-grid-item" id="QuizResultsItem1">
                <img src={'https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__'} width={'278px'} height={'197px'} />
                <h3>Brainy buddies</h3>
                <div></div>
                <div class="navigation">
                    <a href='#'>Home</a>
                    <a href='#'>Lesson Plans</a>
                    <a href='#'>Quiz</a>
                </div>
                <div></div>
                <h2>Quiz results</h2>
            </div>
            <div class="quiz-results-grid-item" id="QuizResultsItem2">
                <div></div>
                <div class='lang'>
                    <a href='#'>MK</a>
                    <a href='#'>EN</a>
                </div>
                <div></div>
                <div>{username}</div>
            </div>
            <div class="quiz-results-grid-item" id="QuizResultsItem3">

            <table className="table">
                    
                         <tbody>
                            <tr><td>Quiz Math Let's Count 100 points</td><td>*****</td></tr>
                            <tr><td>Quiz Math Shapes 100 points</td><td>*****</td></tr>
                            <tr><td>Quiz Reading & Writing 80 points</td><td>*****</td></tr>
                             {/* {
                                 quizResults.map((quizResult) => (
                                     <tr>
                                        <td>{quizResult.name}</td>
                                         <td>{quizResult.score}</td>
                                     </tr>
                                 ))
                             } */}
                         </tbody>
                     </table>
            </div>
        </div>
    )
}
export default QuizResults