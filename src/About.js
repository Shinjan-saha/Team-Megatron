import React from 'react';
import './About.css';

const About = () => (
  <div>
    <h1>Performance</h1>
    <div className="container">
      <div className="box">
        <img src={require('./asset/fees.png')} alt="Fees Payment" />
        <p>Fees Payment</p>
      </div>
      <div className="box">
        <img src={require('./asset/marksheet.png')} alt="Marksheet" />
        <p>Marksheet</p>
      </div>
      <div className="box">
        <img src={require('./asset/attendence.png')} alt="Attendence" />
        <p>Attendence</p>
      </div>
      <div className="box">
        <img src={require('./asset/comms.png')} alt="Cmmunictation" />
        <p>Communictation</p>
      </div>
      <div className="box">
        <img src={require('./asset/discipline.png')} alt="Discpline" />
        <p>Discipline</p>
      </div>
      <div className="box">
        <img src={require('./asset/ptm.png')} alt="PTM" />
        <p>PTM</p>
      </div>
    </div>
  </div>
);

export default About;
