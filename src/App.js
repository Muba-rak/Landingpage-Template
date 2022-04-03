import './App.css';
import {BrowserRouter as Router, Route, Switch} from 'react-router-dom'
import Sample from './Components/Sample';
import Homepage from './Pages/Homepage';
import Register from './Pages/Register';
import Login from './Pages/Login';
import Payment from './Pages/Payment';

function App() {
  return (
    <div className="App">
       <Router>
      <Switch>
        <Route exact path='/'>
          <Homepage />
        </Route>
        <Route path='/register'>
          <Register />
        </Route>
        <Route path='/login'>
          <Login />
        </Route>
        <Route path='/payment'>
          <Payment />

        </Route>
        
      </Switch>
    </Router>
     
      
    </div>
  );
}

export default App;
