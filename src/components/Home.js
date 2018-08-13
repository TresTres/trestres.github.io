//Home.js

import React from 'react';

class Home extends React.Component {

  
  render() {

    const Fragment = React.Fragment;

    return (
      <div className="page">
        <h1>
          {'Here are some artists I like'}
        </h1>
        <div className="card">
          {'Eric Whitacre'}
        </div>
      </div>
    );
  }


}

export default Home;
