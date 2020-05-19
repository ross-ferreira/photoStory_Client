import React from 'react';
import {BrowserRouter as Router, Route} from 'react-router-dom';
import './App.css';

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import CreatePost from './Pages/CreatePost';



function App() {
  return (
    <Router>
      <NavBar/>
      <Route exact path="/">
        <Home/>
      </Route>
      <Route exact path="/signin">
        <Signin/>
      </Route>
      <Route exact path="/profile">
        <Profile/>
      </Route>
      <Route exact path="/signup">
        <Signup/>
      </Route>
      <Route exact path="/createpost">
        <CreatePost/>
      </Route>
    </Router>
  );
}

export default App;
