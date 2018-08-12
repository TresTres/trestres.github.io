//App.js

import React from 'react';
import { Route, withRouter, Switch, Redirect } from 'react-router-dom';
import { TransitionGroup, CSSTransition } from 'react-transition-group';

import Layout from 'components/Layout';

import Home from 'components/Home';
import About from 'components/About';
import Skills from 'components/Skills';
import Resumes from 'components/Resumes';
import Friends from 'components/Friends';
import Links from 'components/Links';



const App = () => {

  const currentKey = window.location.pathname.split('/')[1] || '/';
  const timeout = { 
    enter: 300,
    exit: 200
  };

  const Fragment = React.Fragment;

  
  return (
    <Layout>
      <TransitionGroup component="main" className="page-main">
        <CSSTransition 
          key={currentKey} 
          timeout={timeout} 
          classNames="slide" 
          appear
        >
          <Fragment>
            <div className="title">
              {'My name is Ez and'}
            </div>
            <section className="content">
              <Switch>
                <Route path="/home" component={Home}/>
                <Route path="/about" component={About}/>
                <Route path="/skills" component={Skills}/>
                <Route path="/resumes" component={Resumes}/>
                <Route path="/friends" component={Friends}/>
                <Route path="/links" component={Links}/>
                <Redirect to="/home"/>
              </Switch>
            </section>
          </Fragment>
        </CSSTransition>
      </TransitionGroup>
    </Layout>
  );  
};

export default withRouter(App); 
