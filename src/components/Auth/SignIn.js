import React from "react";
import "../../css/SignIn.css";
import Separator from "../../images/Separator.png";
import axios from 'axios'

class SignIn extends React.Component{
  constructor(props) {
    super(props)
    this.state = {
        username: "",
        password: "",
        remember: false
    }
    this.handleChange = this.handleChange.bind(this);
    this.signIn = this.signIn.bind(this);
  }


  handleChange(event) {
    event.preventDefault()
      const { name, value } = event.target;
      this.setState({
        [name]: value
      });
  }

  signIn = (username, password, remember) => {
    axios.post('/api/users/login', (username, password, remember)).then(res => {
      console.log(res)
    }).catch(err => {
        console.log(err)
    })
  }
  render() {
    return (
      <div>
        <div className="nav-signin">
          <div className="logo">Quivia</div>

          <div className="signUp">
            <a href={"./SignUp"}>Sign Up</a>
          </div>
        </div>

        <main>
          <div className="title">Sign In</div>

          <div className="card-sign">
            <div>
              <p className="login-para">
                Enter your username and password to login
              </p>
            </div>

            <div className="info">
              <form>
                <div className="username-sign">
                  <label for="username">Username</label>
                  <input
                    id="username"
                    name="username"
                    type="text"
                    value={this.state.username}
                    required="required"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="password">
                  <label for="password">Password</label>
                  <input
                    id="password"
                    name="password"
                    type="password"
                    value={this.state.password}
                    required="required"
                    onChange={this.handleChange}
                  />
                </div>

                <div className="remember">
                  <input
                    type="checkbox"
                    name="remember"
                    id="remember"
                    checked={this.state.remember}
                    onChange={this.handleChange}
                  />
                  <label htmlFor="remember">Remember me</label>
                </div>

                <div className="next">
                  <button
                    onClick={() => {
                      this.props.signIn(
                        this.state.username,
                        this.state.password,
                        this.state.remember
                      );
                    }}
                  >
                    Log in
                  </button>
                </div>

                <div className="forgot">
                  <a href={"./Forgot"}>Forgot password</a>
                </div>
              </form>

              <div className="separator-sign">
                <img id="separator" src={Separator} alt="Separator" />
              </div>

              <div className="google-sign"></div>
            </div>
          </div>
        </main>
      </div>
    );
  }
};

export default SignIn;
