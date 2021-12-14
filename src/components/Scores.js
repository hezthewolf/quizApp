import '../css/Scores.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { slide as ScoresMenu } from 'react-burger-menu'

function Scores() {
    return (
        <div>
             <nav className="scores-navigation">
                <div className="hamburger-menu">
                    <ScoresMenu>
                        <a href={'./Categories'}>Categories</a>
                        <a href={'./Levels'}>Levels</a>
                        <a href={'./Leaderboards'}>Leaderboards</a>
                        <a href={'./Profile'}>Profile</a>
                    </ScoresMenu>
                </div>
                <div className="logo-scores">
                    Quivia
                </div>

                <div className="score-links">
                    <ul>
                        <li><a href={'./Categories'}>Categories</a></li>
                        <li><a href={'./Levels'}>Levels</a></li>
                        <li><a href={'./Leaderboards'}>Leaderboards</a></li>
                        <li><a href={'./Profile'}>Profile</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="scores-search">
                    <input id="searchScores" type="text" placeholder="Search" aria-label="Search" />
                    <button type="Submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className="scores-description">
                    <div className="scores-category">
                        <p>Category: History</p>
                    </div>

                    <div className="scores-level">
                        <p>Level: Easy</p>
                    </div>
                </div>

                <div className="scores-card">
                    <div className="scores-section">

                        <div className="scores-description">
                            <p>Congratulations!</p>
                            <p>Your score: 9/10</p>
                        </div>

                        <div className="score-addition">
                            <p>0.9 points added to your overall stats</p>
                            <p>&nbsp;</p>
                        </div>

                        <div className="more-questions">
                            <p>Complete more questions to feeature in the leaderboards</p>
                        </div>


                        <div className="scores-submit">
                            <a href={'#'}>
                                <input type="submit" value="Next" />
                            </a>
                        </div>

                    </div>
                </div>


            </main>
        </div>
    )
}


export default Scores;