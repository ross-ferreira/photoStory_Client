import React from 'react';
import {Link} from 'react-router-dom';

const NavBar = () => {

    return(
        <nav>
        <div class="nav-wrapper">
          <Link to="/" class="brand-logo">Photo Story</Link>
          <ul id="nav-mobile" class="right hide-on-med-and-down">
            <li><Link to="/signin">Login</Link></li>
            <li><Link to="/signup">Signup</Link></li>
            <li><Link to="/profile">Profile</Link></li>
          </ul>
        </div>
      </nav>

    )
}

export default NavBar