import {useState, useEffect} from 'react'
import {BrowserRouter as Router,Switch,Route,Link} from "react-router-dom";

import './App.css';

import Header from './Header';
import Home from './Home'
import Registration from './Registration';
import Verification from './Verification'
import Papers from './Papers'


function App() {

  return (
    <div className='App'>

      <Header/>

      <Router>  
        <div className="Navbar">
          <Link to='/'>
            <button>Home</button>
          </Link>
          <Link to='/Registration'>
            <button>Property Registration</button>
          </Link>

          <Link to='/Verification'>
            <button>Property Verification</button>
          </Link>

          <Link to='/Papers'>
            <button>Get Property Papers</button>
          </Link>
        </div>

          <Switch>
            <Route exact path="/">
              <Home/>
            </Route>

            <Route exact path="/Registration">
              <Registration />
            </Route>

            <Route path="/Verification">
              <Verification />
            </Route>

            <Route path="/Papers">
              <Papers />
            </Route>

          </Switch>
            
        </Router>


        



      

      {/*
      
          



      <ol>
        <li>use Rapyd API</li>
        Secret Key
        <li>0dccb0adf71d5efd9701105e533f9a1c7e3ff4dbd57c78224feac531612bf0d3f6edf070f140e58c</li>
        Access Key
        <li>1AD3E3FF22E170D1F9D1</li>
      </ol>
      */}
    </div>
  )
}

export default App;
