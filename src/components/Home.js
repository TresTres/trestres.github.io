//Home.js

import React from 'react';

class Home extends React.Component {

  constructor(props) {
    super(props);
    this.state = {
      time: new Date().toLocaleTimeString()
    };

    this.tick = this.tick.bind(this);
  }

  componentDidMount() {
    this.interval = setInterval(
      () => this.tick(), 
      1000);
  }

  tick = () => {
    this.setState({
      time: new Date().toLocaleTimeString()
    });
  }
  
  render() {


    return (
      <div className="page">
        <h1>
          {'It is ' + this.state.time}
        </h1>
        <div className="card">
          <h3>
            {'In a hurry? The TL;DR'}
          </h3>
          <p>
            {'My name is Ez and I study Materials Science Engineering and Computer Science at Rutgers Unversity.\n\nI stay up a lot to learn new technologies or mess around with side projects.  (A section for my past work will be added soon)\n\nDuring the daylight hours I attend classes and work as a research assistant and tutor.\n\nOver this summer I\'ve been working on the front-end for HackRU as part of the open source team.\n\nMy pastimes that don\'t involve computer screens include practicing filipino martial arts, eating at diners, and going to local music shows.'}
          </p>
        </div>
      </div>
    );
  }


}

export default Home;
