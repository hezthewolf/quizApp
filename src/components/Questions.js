import { useState } from 'react';
import '../css/Questions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { slide as QuestionsMenu } from 'react-burger-menu'

function Questions() {

    const [answer, setAnswer] = useState(0);
    const [myAnswer, setMyAnswer] = useState(0);
    const [checkedValue, setCheckedValue] = useState(0);
    const [score, setScore] = useState(0);


    const handleRadioChange = () => {
        setMyAnswer(checkedValue);
        if (myAnswer === answer) {
            setScore(score + 1);
        }
    }
    return (
        <div>
            <nav className="questions-navigation">
                <div className="hamburger-menu">
                    <QuestionsMenu>
                        <a href={'./Categories'}>Categories</a>
                        <a href={'./Levels'}>Levels</a>
                        <a href={'./Leaderboards'}>Leaderboards</a>
                        <a href={'./Profile'}>Profile</a>
                    </QuestionsMenu>
                </div>
                <div className="logo-questions">
                    Quivia
                </div>

                <div className="question-links">
                    <ul>
                        <li><a href={'./Categories'}>Categories</a></li>
                        <li><a href={'./Levels'}>Levels</a></li>
                        <li><a href={'./Leaderboards'}>Leaderboards</a></li>
                        <li><a href={'./Profile'}>Profile</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="questions-search">
                    <input id="searchQuestions" type="text" placeholder="Search" aria-label="Search" />
                    <button type="Submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className="questions-description">
                    <div className="questions-category">
                        <p>Category: History</p>
                    </div>

                    <div className="questions-level">
                        <p>Level: Easy</p>
                    </div>
                </div>

                <div className="questions-card">
                    <div className="questions-section">
                        <div id="question-number">
                            <p>Question 1:</p>
                        </div>

                        <div id="ask-question">
                            <p>What were the pyramids of Egypt?</p>
                        </div>

                        <div id="question-answers">

                            <div className='answer1-container'>
                                <input
                                    id="1"
                                    type="radio"
                                    value="1"
                                    onChange={handleRadioChange}
                                />
                                <label>Administrative centers</label>
                            </div>
                            <div className='answer2-container'>
                                <input
                                    id="2"
                                    type="radio"
                                    value="2"
                                    onChange={handleRadioChange}
                                />
                                <label>Tombs</label>
                            </div>
                            <div className='answer3-container'>
                                <input
                                    id="3"
                                    type="radio"
                                    value="3"
                                    onChange={handleRadioChange}
                                />
                                <label>Command posts</label>
                            </div>
                            <div className='answer4-container'>
                                <input
                                    id="4"
                                    type="radio"
                                    value="4"
                                    onChange={handleRadioChange}
                                />
                                <label>Shrines</label>
                            </div>

                        </div>


                        <div className="questions-submit">
                            <a href={'#'}>
                                <input type="submit" value="Next" />
                            </a>
                        </div>

                    </div>
                </div>

            </main >
        </div >
    )
}


export default Questions;