//App.js

import React from 'react';
import { Route, withRouter, Switch } from 'react-router-dom';
import { CSSTransition, TransitionGroup } from 'react-transition-group';

import Menu from 'components/Menu';

import Home from 'components/Home';
import About from 'components/About';
import Skills from 'components/Skills';
import Resumes from 'components/Resumes';
import Friends from 'components/Friends';
import Links from 'components/Links';



const App = ({ location }) => {

  const currentKey = location.pathname.split('/')[1] || '/';
  const timeout = { 
    enter: 2000,
    exit: 3000
  };
  
  return (
    <div className="row flex-column-reverse flex-md-row">
      <div className="col-md-9 app">
        <div className="title">
          {'My name is Ez and'}
        </div>
        <section className="content">
          <TransitionGroup appear>
            <CSSTransition
              key={currentKey}
              timeout={timeout}
              classNames="slide"
            >
              <Switch location={location}>
                <Route exact path="/" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/resumes" component={Resumes}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/links" component={Links}/>
              </Switch>
            </CSSTransition>
          </TransitionGroup>
        </section>
      </div>
      <Menu />
    </div>
  );  
};

export default withRouter(App); 
