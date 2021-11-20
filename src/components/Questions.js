import '../css/Questions.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { slide as QuestionsMenu } from 'react-burger-menu'

function Questions() {
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
                            <button id="answer-1"><p>A. Administrative centers</p></button>
                            <button id="answer-2"><p>B. Tombs</p></button>
                            <button id="answer-3"><p>C. Command posts</p></button>
                            <button id="answer-4"><p>D. Shrines</p></button>

                        </div>

                        <div className="questions-submit">
                            <a href={'#'}>
                                <input type="submit" value="Next" />
                            </a>
                        </div>

                    </div>
                </div>


                <div className="questions-copyright">
                    &copy; Quivia 2021
                </div>
            </main>
        </div>
    )
}


export default Questions;