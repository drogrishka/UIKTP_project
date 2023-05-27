import React, { useEffect, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './quiz.css'


const Quiz = () => {
    const usenavigate = useNavigate();
    const username = sessionStorage.getItem('username');

    return (
        <div class="grid-container">
            <div class="grid-item" id="QuizItem1">
                <img src={'https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__'} width={'278px'} height={'197px'} />
                <h3>Brainy buddies</h3>
                <div></div>
                <h2>Welcome to the quiz!</h2>
            </div>
            <div class="grid-item" id="QuizItem2">
                <div></div>
                <div class='lang'>
                    <a href='#'>MK</a>
                    <a href='#'>EN</a>
                </div>
                <div></div>
                <div>{username}</div>
            </div>
            <div class="grid-item" id="QuizItem3">
                <form>
                    <div class="flex-left">
                        <legend>Q1: Which number comes after 4?:</legend>
                        <div>
                            <input type="radio" id="question1" name="contact" value="answer1" />
                            <label for="question1">5</label>

                            <input type="radio" id="question2" name="contact" value="answer2" />
                            <label for="question2">7</label>

                            <input type="radio" id="question3" name="contact" value="answer3" />
                            <label for="question3">10</label>

                            <input type="radio" id="question4" name="contact" value="answer4" />
                            <label for="question4">1</label>
                        </div>
                        <legend>Q2:Which number comes after 4?:</legend>
                        <div>
                            <input type="radio" id="question1" name="contact" value="answer1" />
                            <label for="question1">5</label>

                            <input type="radio" id="question2" name="contact" value="answer2" />
                            <label for="question2">7</label>

                            <input type="radio" id="question3" name="contact" value="answer3" />
                            <label for="question3">10</label>

                            <input type="radio" id="question4" name="contact" value="answer4" />
                            <label for="question4">1</label>
                        </div>
                        <legend>Q3:Which number comes after 4?:</legend>
                        <div>
                            <input type="radio" id="question1" name="contact" value="answer1" />
                            <label for="question1">5</label>

                            <input type="radio" id="question2" name="contact" value="answer2" />
                            <label for="question2">7</label>

                            <input type="radio" id="question3" name="contact" value="answer3" />
                            <label for="question3">10</label>

                            <input type="radio" id="question4" name="contact" value="answer4" />
                            <label for="question4">1</label>
                        </div>
                        <legend>Q4:Which number comes after 4?:</legend>
                        <div>
                            <input type="radio" id="question1" name="contact" value="answer1" />
                            <label for="question1">5</label>

                            <input type="radio" id="question2" name="contact" value="answer2" />
                            <label for="question2">7</label>

                            <input type="radio" id="question3" name="contact" value="answer3" />
                            <label for="question3">10</label>

                            <input type="radio" id="question4" name="contact" value="answer4" />
                            <label for="question4">1</label>
                        </div>
                    </div>
                    <div class="flex-right">
                        <legend>Q5:Which number comes after 4?:</legend>
                        <div>
                            <input type="radio" id="question1" name="contact" value="answer1" />
                            <label for="question1">5</label>

                            <input type="radio" id="question2" name="contact" value="answer2" />
                            <label for="question2">7</label>

                            <input type="radio" id="question3" name="contact" value="answer3" />
                            <label for="question3">10</label>

                            <input type="radio" id="question4" name="contact" value="answer4" />
                            <label for="question4">1</label>
                        </div>
                    </div>
                    <div>
                        <button type="submit">Submit</button>
                    </div>

                </form>
            </div>
        </div>
    )
}

export default Quiz