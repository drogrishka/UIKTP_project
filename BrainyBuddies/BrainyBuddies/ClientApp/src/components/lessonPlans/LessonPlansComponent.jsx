import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './lessonPlans.css';

const LessonPlans = () => {
    const navigate = useNavigate();
    
    const username = sessionStorage.getItem('username');
    const [lessons, setLessons] = useState([]);
    const [selectedAge, setSelectedAge] = useState(null);
    const [selectedSubject, setSelectedSubject] = useState(null);
    const [quizzes, setQuizzes] = useState([]);
    const [selectedLessonId, setSelectedLessonId] = useState(null);

    useEffect(() => {
        fetchLessons();
        fetchQuizzes();
    }, []);

    const fetchLessons = async () => {
        try {
            const response = await fetch('/api/activity/getActivities');
            if (response.ok) {
                const data = await response.json();
                setLessons(data);
            } else {
                console.error('Failed to fetch lessons');
            }
        } catch (error) {
            console.error('Error while fetching lessons:', error);
        }
    };

    const filterLessons = () => {
        let filteredLessons = lessons;

        if (selectedAge) {
            filteredLessons = filteredLessons.filter((lesson) => lesson.age === selectedAge);
        }

        if (selectedSubject) {
            filteredLessons = filteredLessons.filter((lesson) => lesson.subject === selectedSubject);
        }

        return filteredLessons;
    };

    const fetchQuizzes = async () => {
        try {
            const response = await fetch('/api/quiz/getQuizzes');
            if (response.ok) {
                const data = await response.json();
                setQuizzes(data);
            } else {
                console.error('Failed to fetch quizzes');
            }
        } catch (error) {
            console.error('Error while fetching quizzes:', error);
        }
    };

    const handleCardClick = (lessonId) => {
        setSelectedLessonId(lessonId);
        console.log(lessonId)
    };

    const getQuizzesForSelectedLesson = () => {
        if (selectedLessonId) {
            const filteredQuizzes = quizzes.filter((quiz) => quiz.idActivity === selectedLessonId);
            console.log(quizzes);
            return filteredQuizzes
        }
        return [];
    };

    const handleQuizClick = (id) => {
        navigate(`/quiz/${id}`);
      };

    return (
        <div className="grid-container">
            <div className="grid-item" id="item1">
                <img
                    src="https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/YEOAvKL5L5YOg47cZQOcpgKJvFIGsfdm.png?Expires=1685447509&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=J1rW7eJ-~r1166R6-LeL9YpPKrMnoAgONjjUjYuldEI3nPuq08AFsnoYrjf9X1h1BscZF2835ORJmn0caYvn7HOv9c3I83n~1iMRYOPKHeOKZmWo6yuen8LL1e6akxdyN8evX5y-KQC7Ut2asY~t12ZVodRdRYvxuh4jy6Nul9gyzZhBzmhqKtXT330gPl1QjD9e4zP-94rwTGHwjkPZFfQ85geffuhfEzV-PqUtJTJxCPSAXTq~NONhcGozVD7dOEjzcPUc95clFscVR0DTVvM-4pbWIYP9MMBXWnMhiKLtxvlJ7I6Z6vi8o2csmhuFuUwwXygaI-qdyHl2azSgCg__"
                    width={'278px'}
                    height={'197px'}
                    alt="Brainy buddies"
                />
                <h3>Brainy buddies</h3>
                <div></div>
                <div class='dropdowns'>
                    <div className="dropdown">
                        <div className="dropdown-age">
                            <button className="dropbtn">By year</button>
                            <div className="dropdown-content">
                                <a
                                    onClick={() => setSelectedAge('2-4years')}
                                >
                                    2-4 years
                                </a>
                                <a
                                    onClick={() => setSelectedAge('4-6years')}
                                >
                                    4-6 years
                                </a>
                                <a
                                    onClick={() => setSelectedAge('6-8years')}
                                >
                                    6-8 years
                                </a>
                            </div>
                        </div>
                    </div>
                    <div className="dropdown">
                        <div className="dropdown-subject">
                            <button className="dropbtn">By subject</button>
                            <div className="dropdown-content">
                                <a onClick={() => setSelectedSubject('Mathematic')}>Math</a>
                                <a onClick={() => setSelectedSubject('Sample subject')}>
                                    Reading & Writing
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            <div className="grid-item" id="item2">
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
            <div className="lesson-plans-content-grid-item" id="item3">
                <div className="lesson-plans-content">
                    <div className="lesson-cards">
                        {filterLessons().map((lesson) => (
                            <div
                                key={lesson.idActivity}
                                className="card"
                                onClick={() => handleCardClick(lesson.idActivity)}
                            >
                                {lesson.subject === 'Mathematic' ? (
                                    <img
                                        src="https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/LfOHVKOIBjYcnbvOj2B4kUV4DyLbkTId.png?Expires=1685705066&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=ZUvOlt9L9J~U-SJHKl-Kg6R6oAHSI1SxdpUyfMVxGLWt7GxNf0hmgJ-UR5ZN8JbMrO5AgGscf7idcvb989Amx~adgDRU0v3HSGBcVtBSkKPICFWZg4Ar-TUF8p~czL~xvQnNqa81L2TdHIlDG1X~AdTM8GbO0kxpbko6OrSXiOyqyMP3sYJVfv4BWpS9RswctS4SBei1-bzs9OCbH88cOAL94JHdF2SywK5r5HMbWg7BeAIZVpg0J7ydfHowES~TPZl4mWrbK1uUO9UpY8HsyhtMg4Fujkq68hH1CaH5Ui7mKxTQLEAmfiuCb1HLJSa-iHTX7Sm4TkpTgHFx9si1qw__"
                                        alt="Lesson"
                                    />
                                ) : (
                                    <img
                                        src="https://images.moqups.com/repo/OR2Q9Ms0q16wN34fzzxyCAbkaoPHciku/p_g7o1tO0thQUwW49lMDO5OYt281SNRwjN/qJ096YSbw1DZ5aVLftXZl8RSH7rJq30z.png?Expires=1685705066&Key-Pair-Id=K1TPUF1X6HKIYU&Signature=Q7sBigK4s3WfJXQJ-PAk3~iwDWnXT4H5r4b~2b8jtT-C29u27~2qgDRQmT718eHbGIavwM~onQvVgZGi87WviznWjQ9pL7dKSXPHN7q-tvK~r2EeIPfQmfHcbew8it9~Gnh~8XLDjoFdey4p2QlqXqff4cF7xA8lA79ARm8660-wAPyZ5Pizw1U6mX8YGo4QIetPaUEd95WienccA-gnMUJ9h-ZRMYOpBfdWJtNG9NJmWRqBpqIB84wEqoSiN6PqmLtn9G1K6Xxx4MPzHJRHYScK9wNFqXnqMGelEv4ixKkAcL3aAwl3-Vynb1SFEpvb4C1UzsHcCvNWKkWblcUhtw__"
                                        alt="Lesson"
                                    />
                                )}
                                <p>{lesson.theme}</p>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
            <div className="quizzes-section">
                {selectedLessonId && (
                    <div className="quizzes-section">
                        <p>{lessons[selectedLessonId].theme} quizzes</p>
                        {getQuizzesForSelectedLesson().map((quiz) => (
                            <div key={quiz.idQuiz} className="quiz-card">
                                {/* Render quiz details */}
                                
                                <button onClick={() => handleQuizClick(quiz.idQuiz)}>Quiz</button>
                            </div>
                        ))}
                    </div>
                )}
            </div>

        </div>
    );
};

export default LessonPlans;
