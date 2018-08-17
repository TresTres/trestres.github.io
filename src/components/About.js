//AboutMe.js

import React from 'react';
import ReactMarkdown from 'react-markdown';

import aboutPath from 'resources/AboutMe.md';

class AboutMe extends React.Component {

  constructor(props) {
    super(props);

    this.state = { about: null };
  }

  componentWillMount() {
    fetch(aboutPath)
      .then((resp) => resp.text())
      .then((text) => this.setState({about: text}));
  }

  render() {


    return (
      <div className="page">
        <h1>
          {'this is my bio:'}
        </h1>
        <div className="card">
          <ReactMarkdown source={this.state.about} />
        </div>
      </div>
    );
  }
}

export default AboutMe;


