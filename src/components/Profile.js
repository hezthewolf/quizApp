import '../css/Profile.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { slide as ProfileMenu } from 'react-burger-menu'

function Profile() {
    return (
        <div>
             <nav className="profile-navigation">
                <div className="hamburger-menu">
                    <ProfileMenu>
                        <a href={'./Landing'}>Home</a>
                        <a href={'./Levels'}>Levels</a>
                        <a href={'./Leaderboards'}>Leaderboards</a>
                        <a href={'./Profile'}>Profile</a>
                    </ProfileMenu>
                </div>
                <div className="logo-profile">
                    Quivia
                </div>

                <div className="profile-links">
                    <ul>
                        <li><a href={'./Landing'}>Home</a></li>
                        <li><a href={'./Levels'}>Levels</a></li>
                        <li><a href={'./Leaderboards'}>Leaderboards</a></li>
                        <li><a href={'./Profile'}>Profile</a></li>
                    </ul>
                </div>
            </nav>

            <main>
                <div className="profile-title">
                    <a href={'./Leaderboards'}><FontAwesomeIcon icon={faArrowLeft} /></a>
                    <p>Profile</p>
                </div>

                <div className="profile-card1">
                    <div className="card1-section">
                        <div className="account-title">
                            <p>Account</p>
                        </div>

                        <div className="account-details">
                            <div style={{ "marginBottom": "10px"}}><span>Username: </span><p>speedrunner24</p></div>
                            <div><span>Email: </span><p>speedrunner24@gmail.com</p></div>
                        </div>

                        <div className="password-logout">
                            <div className="change-password"><a href={"./Changepassword"}><p>Change password</p></a></div>
                            <div className="profile-logout">
                                <p>Logout</p>
                            </div>
                        </div>


                    </div>
                    </div>

                <div className="profile-card2">
                    <div className="card2-section">
                        <div className="trivia-title">
                            <p>Trivia</p>
                        </div>

                        <div className="user-details">
                            <div className="user-points"><span>Points: </span><p>1980</p></div>
                            <div className="user-categories"><span>Categories: </span><p>History, Music, Art, Gaming</p></div>
                            <div className="user-points"><span>Best position: </span><p>46</p></div>

                        </div>

                    </div>
                </div>
            </main>

        </div>
    )
}

export default Profile;