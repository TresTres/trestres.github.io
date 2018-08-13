//AboutMe.js

import React from 'react';
import ReactMarkdown from 'react-markdown';



class AboutMe extends React.Component {


  render() {

    const Fragment = React.Fragment;
    const text = require('resources/AboutMe.md');

    return (
      <div className="page">
        <h1>
          {'this is my bio:'}
        </h1>
        <div className="card">
          <ReactMarkdown source={text} />
        </div>
      </div>
    );
  }
}

export default AboutMe;


