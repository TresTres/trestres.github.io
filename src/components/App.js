//App.js

import React from 'react';
import { Route, NavLink, HashRouter } from 'react-router-dom';

import Home from 'components/Home';
import About from 'components/About';
import Skills from 'components/Skills';
import Resumes from 'components/Resumes';
import Friends from 'components/Friends';
import Links from 'components/Links';

class App extends React.Component {
  
  render() {

    const Fragment = React.Fragment;
    
    return (
      <HashRouter>
        <Fragment>
          <ul className="nav">
            <div className="profile-photo">
              {'image goes here'}
            </div>
            <h1 className="nav-title">
              {'Menu'}
            </h1>
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
            <li> 
              <NavLink to="/skills">
                {'Skills and Interests'}
              </NavLink>
            </li>
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
          <div className="content">
            <Route path="/" component={Home}/>
            <Route path="/about" component={About}/>
            <Route path="/skills" component={Skills}/>
            <Route path="/resumes" component={Resumes}/>
            <Route path="/friends" component={Friends}/>
            <Route path="/links" component={Links}/>
          </div>
        </Fragment>
      </HashRouter>
    );  
  }
}

export default App; 
