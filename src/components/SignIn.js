import React from 'react';
import '../css/SignIn.css'
import Separator from '../images/Separator.png'




class SignIn extends React.Component {
    constructor() {
        super()
        this.state = {
            username: "",
            password: "",
            remember: false
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value, type, checked} = event.target
        type === "checkbox" ? this.setState({[name]: checked}) : this.setState({[name]: value})
    }

    render() {
        return (
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
                                    <input id="username" name="username" type="text" value={this.state.username} required="required" onChange={this.handleChange} />
                                </div>


                                <div className="password">
                                    <label for="password">
                                        Password
                                    </label>
                                    <input id="password" name="password" type="password" value={this.state.password} required="required" onChange={ this.handleChange }/>
                                </div>

                            
                                <div className="remember">
                                    <input type="checkbox" name="remember" id="remember" checked={this.state.remember} onChange={this.handleChange} />
                                    <label htmlFor="remember">Remember me</label>
                                </div>

                                <div className="next">
                                
                                    <p>Log in</p>
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

                            <div className="google-sign"></div>
                        </div>

                    </div>

                    <div className="copyright-sign">
                        &copy; Quivia 2021
                    </div>
                </main>
            </div>
        )
    }
}


export default SignIn;