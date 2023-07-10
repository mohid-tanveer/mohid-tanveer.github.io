import React from 'react';
import './topnav.css';
import { Link } from 'react-router-dom';

const Topnav = () => {
  return (
    <div className="topnav">
      <div className="grid-container25">
        <div className="grid-item25l"><small><Link to="/">HOME</Link></small></div>
        <div className="grid-item25l"><small><Link to="/work" className='workk'>WORK</Link></small></div>
        <div className="grid-item25r"><small><Link to="/personal" className='personall'>PERSONAL</Link></small></div>
        <div className="grid-item25r">
          <small><a href="https://github.com/mohid-tanveer" target="_blank" rel="noopener noreferrer">GITHUB</a>&nbsp;&nbsp;&nbsp;</small>
          <small><a href="https://www.linkedin.com/in/mohidtanveer/" target="_blank" rel="noopener noreferrer">LINKEDin</a></small>
        </div>
      </div>
      <hr />
    </div>
  );
}

export default Topnav;