import React, { useEffect, createContext, useReducer,useContext } from 'react';
import { BrowserRouter as Router, Route, Switch, useHistory } from 'react-router-dom';
import { reducer, initialState } from './data/reducer/reducer';
import './App.css';

import NavBar from './components/NavBar';
import Home from './Pages/Home';
import Signin from './Pages/Signin';
import Profile from './Pages/Profile';
import Signup from './Pages/Signup';
import CreatePost from './Pages/CreatePost';


//Have to use useReducer with createContext-this now allows
export const UserContext = createContext()

//moved Routes into serprated function for useHistory

const Routing = () => {
  const history = useHistory();
  const {state,dispatch} = useContext(UserContext);
  useEffect(()=>{
    const user = JSON.parse(localStorage.getItem("user"));
   if(user){
     dispatch({type:"USER",payload:user})
    //  history.push("/")
   } else {
     history.push("/")
   }
  },[])
  return(
    <Switch>
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
  </Switch>
  )
}

function App() {
  const [state,dispatch] = useReducer(reducer,initialState);
  return (
    <UserContext.Provider value={{state:state,dispatch}}>
    <Router>
      <NavBar/>
      <Routing/>
    </Router>
    </UserContext.Provider>
  );
}

export default App;
