import React from "react";
import "../../css/SignUp.css";
import Separator from "../../images/Separator.png";
import axios from 'axios';

class SignUp extends React.Component {
  constructor() {
    super();
    this.state = {
      name: "",
      username: "",
      email: "",
      password: "",
      confirm: "",
    };
    this.handleChange = this.handleChange.bind(this);
  }

  handleChange(event) {
    const { name, value } = event.target;
    this.setState({
      [name]: value,
    });
  }

    signUp = (name, username, email, password) => {
        axios.post('/api/users/register', (name, username, email, password)).then(res => {
          console.log(res)
        }).catch(err => {
          console.log(err)
      })
  };

  render() {
    return (
      <div>
        <div className="nav-sign">
          <div className="logo-sign">Quivia</div>

          <div className="signIn">
            <a href={"./SignIn"}>Sign in</a>
          </div>
        </div>

        <main>
          <div className="title-sign">Sign Up</div>

          <div className="card-signup">
            <form>
              <div className="name">
                <label for="name">Name</label>
                <input
                  id="name"
                  name="name"
                  value={this.state.name}
                  placeholder="John Doe"
                  type="text"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>

              <div className="username">
                <label for="username">Enter your preferred username</label>
                <input
                  id="username"
                  name="username"
                  value={this.state.username}
                  placeholder="username"
                  type="text"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>

              <div className="email">
                <label for="email">Email</label>
                <input
                  id="email"
                  name="email"
                  value={this.state.email}
                  placeholder="johndoe@gmail.com"
                  type="text"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>

              <div className="password-sign">
                <label for="password">Password</label>
                <input
                  id="password"
                  name="password"
                  value={this.state.password}
                  type="password"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>

              <div className="confirm">
                <label for="confirm">Confirm password</label>
                <input
                  id="confirm"
                  name="confirm"
                  value={this.state.confirm}
                  type="password"
                  required="required"
                  onChange={this.handleChange}
                />
              </div>
            </form>

            <div className="separator">
              <img id="separator" src={Separator} alt="Separator" />
              <div className="submit">
                            <input type="submit" value="Next" onClick={() => {
                                this.signUp(this.name, this.username, this.email, this.password)
                            }}/>
              </div>
            </div>

            <div className="google"></div>
          </div>
        </main>
      </div>
    );
  }
}

export default SignUp;
