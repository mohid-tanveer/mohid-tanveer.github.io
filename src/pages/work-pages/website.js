import { WebsiteImg } from '../../images';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav, Mobilenav } from '../../components';

const Website = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "this website. - mohid tanveer portfolio";
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <Worknav leftUrl="/work/receiptify" rightUrl="/work/rr" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>this website.</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              <i>Created in React.js/HTML/CSS — JULY 2023 — </i>
              <a href="https://github.com/mohid-tanveer/mohidtanveer.com" rel="noopener noreferrer" target="_blank">repository link</a><br />
              This project was started as a way to learn HTML and CSS and to create a portfolio website for myself.
              However, as I learned more about web development, I decided to learn React.js and use it to finish the website.
              I went through multiple stages in creating this website, at first all I could do was create what looked like a 
              word document with a few links. Then I started to understand more and more about how HTML and CSS link together
              and got to the point where I could create a website that looked more like a website. However, there were still a
              couple of things that I needed to learn and implement before I could feel proud about my work. For one, I wanted the
              experience to be the same across all devices and screen sizes. Additionally, I wanted to create a multiple page 
              layout that would allow me to have more variability to interacting with the website. I created the navbars on the 
              top and bottom, however, I felt that rewriting the code for these on every page was very redundant and inefficient. 
              That's when the TikTok algorithm clicked in and started pushing me videos about web development using React.js. 
              I decided to port everything over to React. It was sort of a challenge switching from simple HTML and CSS to a 
              framework like React in the middle of a project, but I love to learn how to do new and more efficient things. 
              Personally, I love how it turned out and I'm glad that I learned web development skills so I can implement them 
              in future projects. You can browse the source code for the project at the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="this website." src={WebsiteImg} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Website;