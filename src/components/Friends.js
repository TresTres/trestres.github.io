//Friends.js

import React from 'react';

import friends from 'resources/Friends';

class Friends extends React.Component {
  
  constructor(props) {
    super(props);
    this.makeFriends = this.makeFriends.bind(this);
  }

  makeFriends = (friend) => {

    const images = require.context('resources/img/Friends/', true); //needs a literal
    return(
      <div className="badge">
        <a href={friend.url} 
          target="_blank" 
        >
          <div className="badge-container">
            <img src={images(friend.img)} alt={friend.name} />
            <div className="badge-header">
              <h4>
                {friend.name}
              </h4>
            </div>
          </div>
        </a>
      </div>
    );
  };

  render() {

  
    const badges = Object.keys(friends).map(
      key => this.makeFriends(friends[key])
    );


    return(
      <div className="page">
        <h1>
          {'these are a few of my friends:'}
        </h1>
        <div className="card">
          <p>
            {'If introductions cannot be made in person, I would like to go ahead and introduce a few good friends of mine who are also in STEM.  Feel free to check out their profiles.'}
          </p>
          <div className="hr "/>
          <div className="gallery-grid">
            {badges}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
