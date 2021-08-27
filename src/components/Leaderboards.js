import '../css/Leaderboards.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faSearch } from '@fortawesome/free-solid-svg-icons'
import { faCaretDown } from '@fortawesome/free-solid-svg-icons'
import { slide as LeaderboardsMenu } from 'react-burger-menu'


function Leaderboards() {
    return (
        <div>
            <nav className="leaderboards-navigation">
                <div className="hamburger-menu">
                    <LeaderboardsMenu>
                        <a href={'./Categories'}>Categories</a>
                        <a href={'./Levels'}>Levels</a>
                        <a href={'./Leaderboards'}>Leaderboards</a>
                        <a href={'./Profile'}>Profile</a>
                    </LeaderboardsMenu>
                </div>
                <div className="logo-leaderboards">
                    Quivia
                </div>

                <div className="leaderboards-links">
                    <ul>
                        <li><a href={'./Categories'}>Categories</a></li>
                        <li><a href={'./Levels'}>Levels</a></li>
                        <li><a href={'./Leaderboards'}>Leaderboards</a></li>
                        <li><a href={'./Profile'}>Profile</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="leaderboards-search">
                    <input id="searchLeaderboards" type="text" placeholder="Search" aria-label="Search" />
                    <button type="Submit" className="search-btn">
                        <FontAwesomeIcon icon={faSearch} />
                    </button>
                </div>

                <div className="leaderboards-description">
                    
                    <div className="leaderboards-title">
                        <p className="leaderboards-page-title">Leaderboards</p>
                        <div className="filters-section">
                            <div className="categories-filter">
                                <p>Category</p>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>

                            <div className="leaderboards-filter">
                                <p>Filter</p>
                                <FontAwesomeIcon icon={faCaretDown} />
                            </div>
                        </div>
                    </div>
                    <div className="leaderboards-category">
                        <p>Category: History</p>
                    </div>

                </div>

                <div className="leaderboards-card">
                    <div className="leaderboards-section">

                            <table>
                                <tr>
                                    <th style={{width: "10%"}}></th>
                                    <th style={{width: "50%"}}>Username</th>
                                    <th style={{width: "30%"}}>Points</th>
                                    <th style={{width: "10%"}}>Level</th>
                                </tr>

                            <tr>
                                <td>1.</td>  <td>speedrunner5</td> <td>1998</td> <td>2</td>
                            </tr>
                        </table>
                        

                    </div>
                </div>


                <div className="leaderboards-copyright">
                    &copy; Quivia 2021
                </div>
            </main>
        </div>
    )
}

export default Leaderboards;