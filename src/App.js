import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start';
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Landing from './components/Landing';
import Questions from './components/Questions';
import Scores from './components/Scores';
import Leaderboards from './components/Leaderboards';
import Profile from './components/Profile';

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
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
