import React from 'react';
import Navbar from './components/Navbar.js';
import {BrowserRouter as Router,Switch,Route} from 'react-router-dom'
import './App.css';

function App() {
  return (
   <>
   <Router>

   
   <Switch>
     <Route path='/' exact />
     <Route path='/header' exact component={Navbar} />
   </Switch>

   </Router>
    
  </>
  );
}

export default App;
