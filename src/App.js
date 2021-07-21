import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start'
import SignUp from './components/SignUp';
import SignIn from './components/SignIn';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path='/SignUp' component={SignUp} />
            <Route exact path='/SignIn' component={SignIn} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
