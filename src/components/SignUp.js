import React, { useState } from 'react';
import { GoogleLogin, GoogleLogout } from 'react-google-login'
import '../css/SignUp.css'
import Separator from '../images/Separator.png'


function SignUp() {

        const clientId = "855001071690-jdg0kmggi5uikmbt2tbqs5clih92tfoe.apps.googleusercontent.com";
        const [showLoginButton, setShowLoginButton] = useState(true);
        const [showLogoutButton, setShowLogoutButton] = useState(false);

        const onLoginSuccess = (res) => {
            console.log("Login success", res.profileObj);
        }

        const onLoginFailure = (res) => {
            console.log("Login failed", res);
        }

        const onSignOutSuccess = () => {
            alert("Signout successful")
            setShowLoginButton(true);
            setShowLogoutButton(false);
        }
        return (
            <div>
                <div className="nav-sign">
                    <div className="logo-sign">
                        Quivia
                    </div>

                    <div className="signIn">
                        <a href={"./SignIn"}>Sign in</a>
                    </div>
                </div>

                <main>
                    <div className="title-sign">
                        Sign Up
                    </div>

                    <div className="card-signup">
                        <form>
                            <div className="name">
                                <label for="name">
                                    Name
                                </label>
                                <input id="name" placeholder="John Doe" type="text" required="required" />
                            </div>

                            <div className="username">
                                <label for="username">
                                    Choose your username
                                </label>
                                <input id="username" placeholder="username" type="text" required="required" />
                            </div>

                            <div className="email">
                                <label for="email">
                                    Email
                                </label>
                                <input id="email" placeholder="johndoe@gmail.com" type="text" required="required" />
                            </div>

                            <div className="password-sign">
                                <label for="password">
                                    Password
                                </label>
                                <input id="password" type="password" required="required" />
                            </div>

                            <div className="confirm">
                                <label for="confirm">
                                    Confirm password
                                </label>
                                <input id="confirm" type="password" required="required" />
                            </div>
                        </form>
                        

                        <div className="separator">
                            <img id="separator" src={Separator} alt="Separator" />
                            <div className="submit">
                                <a href={'./SignIn'}>
                                    <input type="submit" value="Next" />
                                </a>
                            </div>
                        </div>


                        <div className="google">
                            {showLoginButton ?
                                <GoogleLogin
                                    id="google-button"
                                    clientId={clientId}
                                    buttonText="Sign in with google"
                                    onSuccess={onLoginSuccess}
                                    onFailure={onLoginFailure}
                                    cookiePolicy={'single_host_origin'}
                                /> : null
                                
                            }

                            {showLogoutButton ?
                                <GoogleLogout
                                    clientId={clientId}
                                    buttonText="Logout"
                                    onLogoutSuccess={onSignOutSuccess}
                                >
                                </GoogleLogout> : null
                            
                            }

                        </div>

                    </div>

                    <div className="copyright">
                        &copy; Quivia 2021
                    </div>
                </main>
            </div>
        )
    }


export default SignUp;