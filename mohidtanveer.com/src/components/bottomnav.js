import React from 'react';
import './bottomnav.css';
import { Link } from 'react-router-dom';

const Bottomnav = () => {
  return (
    <div className="bottomnav">
      <div className="grid-container30">
        <div className="grid-item30l"><small><Link to="/work" className='workk'><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>PROJECTS</span></Link></small></div>
        <div className="grid-item30c"><small><Link to="/about" className='aboutmee'><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>ABOUT ME</span></Link></small></div>
        <div className="grid-item30r"><small><Link to="/personal" className='personall'><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>INTERESTS</span></Link></small></div>
      </div>
    </div>
  );
}

export default Bottomnav;