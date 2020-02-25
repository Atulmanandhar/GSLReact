import React from 'react';

import './App.css';
import Home from './pages/Home/Home'
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom';
import About from './pages/About/About';


function App() {
  return (
    <div className="App">
      <Router>
        <Switch>
          <Route exact path='/' component={Home}  />
          <Route path='/about' component={About}  />
        
        </Switch>

      </Router>
      
    </div>
  );
}

export default App;
