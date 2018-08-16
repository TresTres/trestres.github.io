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
            {'In a hurry?  My TL;DR'}
          </h3>
        </div>
      </div>
    );
  }


}

export default Home;
