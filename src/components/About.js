//AboutMe.js

import React from 'react';
import ReactMarkdown from 'react-markdown';


const text = require('../resources/AboutMe.md');

class AboutMe extends React.Component {


  render() {


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


