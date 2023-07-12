import {  } from '../../images';
import {  } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav, Mobilenav } from '../../components';

const Website = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <Worknav leftUrl="" rightUrl="/work/rr" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>this website.</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                <i>Created in LANGUAGE — MONTH 2023 — </i>
                <a href="" rel="noopener noreferrer" target="_blank">repository link</a><br />
                This project was created during my  course. 
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="this website." src='' />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Website;