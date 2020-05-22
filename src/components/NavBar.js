import React,{useContext} from 'react';
import {Link, useHistory} from 'react-router-dom';
import {UserContext} from '../App';

const NavBar = () => {
  const {state,dispatch} = useContext(UserContext);
  const history = useHistory();
  //State is initially NULL!!!
  const renderList = () => {
    if(state){
      return [
        <li><Link to="/profile">Profile</Link></li>,
        <li><Link to="/createpost">New Post</Link></li>,
        <button 
          className="waves-effect waves-light btn red lighten-1"
          onClick={()=>{ 
            localStorage.clear();
            dispatch({type:"CLEAR"})
            history.push('/signin')
          }}
          >Sign Out
        </button>
      ]

    }else{
      return [
        <li><Link to="/signin">Signin</Link></li>,
        <li><Link to="/signup">Signup</Link></li>
      ]
    }
  }

    return(
        <nav>
        <div class="nav-wrapper">
          <Link to={ state ? "/" : "/signin" } class="brand-logo">FotoStory</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            {renderList()}
          </ul>
        </div>
      </nav>

    )
}

export default NavBar