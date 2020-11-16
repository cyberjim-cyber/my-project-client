import React, { createContext, useState } from 'react';
import logo from './logo.svg';
import './App.css';
import Home from './Components/Home/Home';
import 'bootstrap/dist/css/bootstrap.css';

import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import Login from './Components/Login/Login';
import Hook from './Components/Hook/Hook';
import PrivateRoute from './Components/PrivateRoute/PrivateRoute';
import Success from './Components/Success/Success';

export const userContext=createContext()

function App() {


  const [loggedInUser,setloggedInUser]=useState({})
  return (
    <userContext.Provider value={[loggedInUser,setloggedInUser]} >
      <Router>

      <Switch>
      <Route exact path="/">
      <Hook></Hook>

      </Route>
      <Route path="/success">
      <Success></Success>

      </Route>
      {/* <PrivateRoute path="/">
      
      </PrivateRoute> */}
      
      </Switch>

      </Router>
  
    </userContext.Provider>
  );
}

export default App;
