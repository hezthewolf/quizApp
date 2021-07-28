import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';
import Landing from './components/Landing';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/SignIn' component={SignIn} />
            <Route exact path='/Landing' component={Landing} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
