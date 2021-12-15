import './App.css';
import Header from './component/header';
import Home from './component/home';
import Shop from './component/shop';
import Checkout from './component/checkout';
import {useStateValue} from './component/stateProvider';
import { BrowserRouter as Router, Route, Switch } from "react-router-dom";


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/'>
            <Header/>
            <Home/>
          </Route>
          <Route path='/shop'>
            <Shop/>
          </Route>
          <Route path='/checkout'>
            <Checkout/>
          </Route>
        </Switch>
      </Router>
    </div>
  );
}

export default App;
