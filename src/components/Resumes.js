//Resumes.js

import React from 'react';

class Resumes extends React.Component {

  render() {

    const mse_pdf = require('resources/pdfs/Ezra_Ablaza_MSE.pdf');
    const cd_pdf = require('resources/pdfs/Ezra_Ablaza_CS.pdf');

    return (
      <div className="page">
        <h1>
          {'here are my resumes:'}
        </h1>
        <div className="card">
          <p>
            {'It would be unfeasible to put experience from two different fields into a singular resume, so I decided to make two separate ones that each tell part of a larger story.  There will be some overlapping entries between the two; I like to view them as examples of opportunity areas where the two industries are connected.  If you are a recruiter with a particular role in mind, please '}
            <a href={'#/links'}>
              {'contact me directly'}
            </a>
            {' for a more tailored CV.'}
          </p>
          <div className="half">
            <h3>
              {'For '}
              <b>
                {'materials engineer'}
              </b>
              {' qualifications:'}
            </h3>
            <a href={mse_pdf}
              className="btn"
            >
              {'Click here.'}
            </a>
          </div>
          <div className="vr" />
          <div className="half">
            <h3>
              {'For '}
              <b>
                {'software developer'}
              </b>
              {' qualifications:'}
            </h3>
            <a href={cd_pdf}
              className="btn"
            >
              {'Click here.'}
            </a>
          </div>
        </div>
      </div>
    );
  }
}

export default Resumes;
