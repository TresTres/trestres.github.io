//AboutMe.js

import React from 'react';
import ReactMarkdown from 'react-markdown';



class AboutMe extends React.Component {


  render() {

    const Fragment = React.Fragment;
    const text = require('resources/AboutMe.md');

    return (
      <Fragment>
        <h1>
          {'this is my bio:'}
        </h1>
        <div className="card">
          <p>
            <ReactMarkdown source={text} />
          </p>
        </div>
      </Fragment>
    );
  }
}

export default AboutMe;


