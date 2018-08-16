//Layout.js

import React from 'react';
import { NavLink } from 'react-router-dom';



const Layout = ({ children }) => {

  const imgPath = require('resources/img/Professional_Photo.jpg');

  return(
    <section className="page-whole">
      <header className="menu">
        <div className="profile-photo">
          <img src={imgPath} alt="Professional Photo"/>
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
                {'About me'}
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
                {'Important Links'}
              </NavLink>
            </li>
          </ul>
        </nav>
      </header>
      {children}
    </section>
  );
};

export default Layout;
