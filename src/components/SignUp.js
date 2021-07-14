import React, { Component } from 'react';
import '../App.css'


class SignUp extends Component {
    render() {
        return (
            <div>
                <div className="nav">
                    <div className="logo">
                        Quivia
                    </div>

                    <div className="signIn">
                        <a href={"#"}>Sign in</a>
                    </div>
                </div>

                <main>
                    <div className="title">
                        Sign Up
                    </div>

                    <div className="card-sign">
                        <form>
                        </form>
                    </div>
                </main>
            </div>
        )
    }
}


export default SignUp;