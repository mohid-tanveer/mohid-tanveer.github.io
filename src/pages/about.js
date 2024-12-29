import { Analogsentimentalism, ProfilePic } from '../images';
import { analogsentimentalismVideoData } from '../videoData';
import { Resume } from '../files';
import { React, useEffect } from 'react';
import styles from './about.module.css'
import './pages.css';
import { Topnav, Bottomnav, Mobilenav } from '../components';

const videoBackground = (
    <video className={styles.aboutvideo} playsInline autoPlay loop muted preload="auto">
        <source src={Analogsentimentalism} type="video/mp4" />
        <script type="application/ld+json">{JSON.stringify(analogsentimentalismVideoData)}</script>
    </video>
);

const About = () => {
    useEffect(() => {
        document.title = 'about me - mohid tanveer portfolio';
        window.scrollTo(0, 0);
    }, []);
    return (
    <div>
        {videoBackground}
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <div className="about">
            <div className="grid-container5050">
                <div className="grid-item5050">
                    <h1>
                    <span className={styles.abouth1}>Mohid Tanveer,<br />&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Split In Parts</span>
                    </h1>
                    <br />
                    <br />
                    <br />
                    <br /><br /><br />
                    <div className={styles.aboutimg} style={{ textAlign: 'right' }}>
                        <img src={ProfilePic} alt="Profile" />
                    </div>
                </div>
                <div className="grid-item5050">
                    <span className={styles.abouttext}>
                    I mean what really makes a person who they are? I think it’s the company they keep; the people they collaborate
                    with socially and professionally. You want to work with people who are adaptable, but also have a strong sense of
                    self, driving you creatively and motivating you to innovate. Hear what I have to offer and I assure you that I would be that fit
                    for your purposes.<br /><br />&nbsp; &nbsp; &nbsp; My name is Mohid Tanveer, I am a current senior at Rhodes
                    College studying Computer Science. I am currently interested in AI/ML, data structures/algorithms, and statistical methods—especially
                    the effects applications of such topics can have on our society and day to day lives.
                    I am advanced in Python; proficient in C, SQL, and Java; and experienced in C++, HTML/CSS, JavaScript, Node.js/React.js, and R.<br /><br />
                    &nbsp; &nbsp; &nbsp; I am the kind of person who loves to learn new skills and refine them.
                    Nothing is perfect, everything is an unfinished project; you can always improve. You will find evidence of
                    this idea on this website.<br />&nbsp; &nbsp; &nbsp; I pride myself as an organized person, I like to keep everything
                    in scope and work on things in parts; considering all the possibilities.<br /><br />&nbsp; &nbsp;&nbsp;
                    Take your time and explore all of the parts of this website and I hope you decide to reach out and learn more.
                    All content (images and videos) and work found on the site are mine; inspiration from everywhere. Contact me using
                    the links below or the links in the site navigation.
                    </span>
                    <br />
                    <br />
                    <div style={{ textAlign: 'right' }}>
                    <span style={{ color: '#fff' }}>
                        <span style={{ color: '#f00' }}>
                        <a href={Resume} rel="noopener noreferrer" target="_blank">
                            <span style={{ color: '#f00' }}>Resume</span>
                        </a>
                        </span>
                        &nbsp; <a href="https://www.linkedin.com/in/mohidtanveer/" rel="noopener noreferrer" target="_blank">
                        <span style={{ color: '#f00' }}>Linkedin</span>
                        </a>
                    </span>
                    <br />
                    </div>
                </div>
            </div>
        </div>
    </div>
    );
}

export default About;