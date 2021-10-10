import React, { useState } from 'react';
// import { GoogleLogin, GoogleLogout } from 'react-google-login'
import '../css/SignIn.css'
import Separator from '../images/Separator.png'
import LoginButton from './LoginButton';




function SignIn(){



    // const clientId = "855001071690-jdg0kmggi5uikmbt2tbqs5clih92tfoe.apps.googleusercontent.com";
    // const [showLoginButton, setShowLoginButton] = useState(true);
    // const [showLogoutButton, setShowLogoutButton] = useState(false);

    // const onLoginSuccess = (res) => {
    //         console.log("Login success", res.profileObj);
    // }

    // const onLoginFailure = (res) => {
    //         console.log("Login failed", res);
    // }

    // const onSignOutSuccess = () => {
    //         alert("Signout successful")
    //         setShowLoginButton(true);
    //         setShowLogoutButton(false);
    // }
    return(
        <div>
                <div className="nav-signin">
                    <div className="logo">
                        Quivia
                    </div>
                </div>

                <main>
                    <div className="title">
                        Sign In
                    </div>


                    <div className="card-sign">
                    
                        <div>
                            <p className="login-para">Enter your username/email  and password to login</p>
                        </div>
                    
                        <div className="info">

                            <form>
                                
                                <div className="username-sign">
                                    <label for="username">
                                        Username
                                    </label>
                                    <input id="username"  type="text" required="required" />
                                </div>


                                <div className="password">
                                    <label for="password">
                                        Password
                                    </label>
                                    <input id="password" type="password" required="required" />
                                </div>

                            
                                <div className="remember">
                                    <input type="checkbox" id="remember" />
                                    <label htmlFor="remember">Remember me</label>
                                </div>

                                <div className="next">
                                
                                        <LoginButton />
                                </div>

                            <div className="forgot">
                                <a href={"./Forgot"}>
                                    Forgot password
                                </a>
                            </div>


                            </form>
                            

                            <div className="separator-sign">
                                <img id="separator" src={Separator} alt="Separator" />
                            </div>

                            <div className="google-sign">
                                {/* {showLoginButton ?
                                    <GoogleLogin
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
                                
                                } */}

                            

                            </div>
                        </div>

                    </div>

                    <div className="copyright-sign">
                        &copy; Quivia 2021
                    </div>
                </main>
            </div>
    )
}


export default SignIn;