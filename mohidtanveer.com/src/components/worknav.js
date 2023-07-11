import React from 'react'
import './worknav.css';
import { Link } from 'react-router-dom';
import { Arrow } from '../images';

const Worknav = ({ leftUrl, rightUrl }) => {
  const leftArrowClass = leftUrl === '' ? 'lowerurtone' : '';
  const rightArrowClass = rightUrl === '' ? 'lowerurtone' : '';

  return (
    <div class="arrows">
      <div class="grid-container5050">
          <div className={`grid-item5050 ${leftArrowClass}`}><Link to={leftUrl}><img alt="Left Arrow" src={Arrow} /></Link></div>
          <div className={`grid-item5050 ${rightArrowClass}`}><Link to={rightUrl} style={{transform: 'scaleX(-1)'}}><img alt="Right Arrow" src={Arrow} /></Link></div>
      </div>
    </div>
  )
}

export default Worknav