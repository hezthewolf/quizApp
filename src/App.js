import './App.css'
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Start from './components/Start'
import SignUp from './components/SignUp';

function App() {
  return (
    <BrowserRouter>
      <div>
          <Switch>
            <Route exact path="/" component={Start} />
            <Route exact path='/SignUp' component={SignUp} />
          </Switch>
        </div>
    </BrowserRouter>
  );
}


export default App;
