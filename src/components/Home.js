//Home.js

import React from 'react';

class Home extends React.Component {

  
  render() {

    const Fragment = React.Fragment;

    return (
      <Fragment>
        <h1>
          {'Here are some artists I like'}
        </h1>
        <div className="card">
          {'Eric Whitacre'}
        </div>
      </Fragment>
    );
  }


}

export default Home;
