//Menu.js

import React from 'react';
import { NavLink } from 'react-router-dom';



const Layout = () => {

  const imgPath = require('resources/img/Professional_Photo.jpg');

  return(
    <div className="col-md-3">
      <div className="profile-photo">
        <img src="" alt="Professional Photo"/>
      </div>
      <h1 className="nav-title">
        {'Menu'}
      </h1>
      <nav>
        <ul>
          <li>
            <NavLink to="/">
              {'Home'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/about">
              {'About'}
            </NavLink>
          </li>
          {/*<li> 
            <NavLink to="/skills">
              {'Skills and Interests'}
            </NavLink>
          </li>*/}
          <li>
            <NavLink to="/resumes">
              {'Resumes'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/friends">
              {'Friends'}
            </NavLink>
          </li>
          <li>
            <NavLink to="/links">
              {'Contact'}
            </NavLink>
          </li>
        </ul>
      </nav>
    </div>
  );
};

export default Layout;
