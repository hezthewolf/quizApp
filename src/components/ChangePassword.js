import '../css/ChangePassword.css'
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { faArrowLeft } from '@fortawesome/free-solid-svg-icons'
import { slide as ProfileMenu } from 'react-burger-menu'

function ChangePassword() {
    return(
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
                <div className="password-title">
                    <p>
                        <a href={'./Profile'}><FontAwesomeIcon icon={faArrowLeft} /></a>
                        Change Password
                    </p>
                </div>

                
                <div className="password-card">
                    <div className="password-section">
                        <div className="current-password">
                            <label htmlFor="current-password" id="current-label">
                                <p>Current password:</p>
                            </label>
                            <input type="password" id="current-password" />
                        </div>

                        <div className="new-password">
                            <label htmlFor="new-password" id="new-label">
                                <p>New password:</p>
                            </label>
                            <input type="password" id="new-password" />
                        </div>

                        <div className="confirm-password">
                            <label htmlFor="confirm-password" id="confirm-label">
                                <p>Confirm password:</p>
                            </label>
                            <input type="password" id="confirm-password" />
                        </div>

                        <div className="forgot-p">
                            <a href={'./Forgot'}>Forgot password?</a>
                        </div>

                        <div className="password-submit">
                            <a href={'./SignIn'}>
                                <input type="submit" value="Done" />
                            </a>
                        </div>
                        
                        
                    </div>
                </div>
            </main>
        </div>
    )
}


export default ChangePassword;