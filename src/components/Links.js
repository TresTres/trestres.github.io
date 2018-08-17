//Links.js

import React from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';

import links from 'resources/Links';

class Friends extends React.Component {
  
  constructor(props) {
    super(props);
    this.makeLinks = this.makeLinks.bind(this);
  }

  makeLinks = (key, link) => {


    let label = (key) ? key.replace(/[^A-Za-z]./g, '') : '';
    let icon = ['fab', link.type];
    if(link.type === 'inbox') {
      
      icon = 'inbox';
    }

    return (
      <div className="entry">
        <a href={link.url} 
          target="_blank" 
        >
          <div className="entry-icon">
            <FontAwesomeIcon 
              className="icon"
              size="4x"
              icon={icon}
            />
          </div>
          <div className="entry-info">
            <h2>
              {label}
            </h2>
            <h4>
              {link.handle}
            </h4>
          </div>
        </a>
      </div>
    );
  };

  render() {

    const entries = Object.keys(links).map(
      key => this.makeLinks(key, links[key])
    );


    return(
      <div className="page">
        <h1>
          {'here\'s how to contact me:'}
        </h1>
        <div className="card">
          <div className="entry-grid">
            {entries}
          </div>
        </div>
      </div>
    );
  }
}

export default Friends;
