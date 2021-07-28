import '../css/Landing.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import LandingTiles from './LandingTiles'
import movieCategory from '../images/moviesCategory.jpg'
import musicCategory from '../images/musicCategory.jpg'
import scienceCategory from '../images/scienceCategory.jpg'
import historyCategory from '../images/historyCategory.jpg'

function Landing() {
    return (
        <div>
            <nav className="landing-navigation">
                <div className="logo-landing">
                    Quivia
                </div>

                <div className="landing-links">
                    <ul>
                        <li>Categories</li>
                        <li>Levels</li>
                        <li>Leaderboards</li>
                        <li>Profile</li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="landing-search">
                    <input id="searchLanding" type="text" placeholder="Search" aria-label="Search" />
                    <button type="Submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className="landing-para">
                    <p>Sharpen your knowledge and skills with thousands of niche-tailored questions</p>
                    <p>Save your progress and check the leaderboards</p>
                </div>

                <div className="categories-tiles">
                    <p className="categories-title">Common categories</p>

                    <div className="individual-tiles">
                        <LandingTiles imaging={movieCategory} tileText="Movies & TV" />
                        <LandingTiles imaging={musicCategory} tileText="Music" />
                        <LandingTiles imaging={scienceCategory} tileText="Science & Math" />
                        <LandingTiles imaging={historyCategory} tileText="History" />
                    </div>
                </div>
            </main>
        </div>
    )
}


export default Landing;