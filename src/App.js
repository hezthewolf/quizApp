import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start';
import SignUp from './components/Auth/SignUp';
import SignIn from './components/Auth/SignIn';
import Landing from './components/Landing';
import Questions from './components/Questions';
import Scores from './components/Scores';
import Leaderboards from './components/Leaderboards';
import Profile from './components/Profile';
import ChangePassword from './components/ChangePassword';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/Landing' component={Landing} />
            <Route exact path='/Questions' component={Questions} />
            <Route exact path='/Scores' component={Scores} />
            <Route exact path='/Leaderboards' component={Leaderboards} />
            <Route exact path='/Profile' component={Profile} />
            <Route exact path='/ChangePassword' component={ChangePassword} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
