import React from 'react';
import './topnav.css';
import { Link } from 'react-router-dom';

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="grid-container25">
        <div className="grid-item25l"><small className='consistency'><Link to="/">HOME</Link></small></div>
        <div className="grid-item25l"><small className='consistency'><Link to="/work" className='workk'>WORK</Link></small></div>
        <div className="grid-item25r"><small className='consistency'><Link to="/personal" className='personall'>PERSONAL</Link></small></div>
        <div className="grid-item25r">
          <small className='consistency'><a href="https://github.com/mohid-tanveer" target="_blank" rel="noopener noreferrer">GITHUB</a>&nbsp;&nbsp;&nbsp;</small>
          <small className='consistency'><a href="https://www.linkedin.com/in/mohidtanveer/" target="_blank" rel="noopener noreferrer">LINKEDin</a></small>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Topnav;