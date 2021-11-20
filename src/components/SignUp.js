import React from 'react';
import '../css/SignUp.css'
import Separator from '../images/Separator.png'


class SignUp extends React.Component {
    constructor() {
        super()
        this.state = {
            name: "",
            username: "",
            email: "",
            password: "",
            confirm: ""
        }
        this.handleChange = this.handleChange.bind(this)
    }

    handleChange(event) {
        const {name, value} = event.target
        this.setState({
            [name]: value
        })
    }


    render() {

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
                                <input id="name" name="name" value={this.state.name} placeholder="John Doe" type="text" required="required" onChange={this.handleChange} />
                            </div>

                            <div className="username">
                                <label for="username">
                                    Choose your username
                                </label>
                                <input id="username" name="username" value={this.state.username} placeholder="username" type="text" required="required" onChange={this.handleChange} />
                            </div>

                            <div className="email">
                                <label for="email">
                                    Email
                                </label>
                                <input id="email" name="email" value={this.state.email} placeholder="johndoe@gmail.com" type="text" required="required" onChange={this.handleChange} />
                            </div>

                            <div className="password-sign">
                                <label for="password">
                                    Password
                                </label>
                                <input id="password" name="password" value={this.state.password} type="password" required="required" onChange={this.handleChange} />
                            </div>

                            <div className="confirm">
                                <label for="confirm">
                                    Confirm password
                                </label>
                                <input id="confirm" name="confirm" value={this.state.confirm} type="password" required="required" onChange={this.handleChange} />
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


                        <div className="google"></div>

                    </div>

                    <div className="copyright">
                        &copy; Quivia 2021
                    </div>
                </main>
            </div>
        )
    }
}


export default SignUp;