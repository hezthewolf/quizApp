import React, { Component } from 'react'
import questions from '../images/questions.png'
import questionsMedium from '../images/questionsMedium.png'
import questionsTablet from '../images/questionsTablet.png'
import questionsMobile from '../images/questionsMobile.png'

class Start extends Component{
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
          <div className="card">
            <div className="branding">
              <p>Welcome to Quivia, your trivia companion</p>
              <p>Sign up to save progress and feature in the leaderboards</p>
              <a href={"./SignUp.js"}><button>Sign up</button></a>
            </div>



            <div className="svg">
              <img id="questions-large" src={questions} alt="Questions" />
              <img id="questions-medium" src={questionsMedium} alt="Questions medium screen" />
              <img id="questions-tablet" src={questionsTablet} alt="Questions tablet screens" />
              <img id="questions-mobile" src={questionsMobile} alt="Questions mobile screens" />
            </div>
          </div>


          <div className="copyright">
            &copy; Quivia 2021
          </div>
        </main>
      </div>
    )
  }
}

export default Start;