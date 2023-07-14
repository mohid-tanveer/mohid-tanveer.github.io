import { ShellImg, DijkstrasImg, RacketImg, HashImg, rrImg, Design, Music, Data, Photocomp } from "../images";
import { musicVideoData, personalityVideoData } from "../videoData";
import styles from './homepage.module.css';
import { React, useEffect } from 'react';
import './pages.css';
import { Topnav, Bottomnav, Mobilenav } from '../components';
import { Link } from 'react-router-dom';

const Homepage = () => {
  useEffect(() => {
    document.title = 'homepage - mohid tanveer portfolio';
  }, []);
  
  return (
    <div className="Homepage">
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <div className="left-page" style={{ overflow: 'scroll' }}>
        <h1>Work/Projects<br /></h1>
        <br /><br /><br />
        <Link to="/work/rr"><img className={styles.homepageimg} src={rrImg} alt="#RR" /></Link><br />##RR - C<br />MAY 2023<br /><br /><br />
        <Link to="/work/hash"><img className={styles.homepageimg} src={HashImg} alt="Where's the Hash?" /></Link><br />Where's the Hash? - C<br />April 2023<br /><br /><br />
        <Link to="/work/racket"><img className={styles.homepageimg} src={RacketImg} alt="What’s that Racket?" /></Link><br />What’s that Racket? - Java<br />April 2023<br /><br /><br />
        <Link to="/work/dijkstras"><img className={styles.homepageimg} src={DijkstrasImg} alt="It’s just Dijkstra’s?" /></Link><br />It’s just Dijkstra’s? - Racket<br />March 2023<br /><br /><br />
        <Link to="/work/blueshell"><img className={styles.homepageimg} src={ShellImg} alt="Blue Shell!" /></Link><br />Blue Shell! - C<br />Feb 2023<br /><br /><br />
        <div style={{ textAlign: 'center' }}><Link to="/work">SEE ALL PROJECTS</Link><br /><br /><br /></div><br /><br /><br />
      </div>
      <div className="centerlogo">
        <div className="centerlogoo">
          <div className="version">v1.23.03</div>
          MOHID TANVEER™<br />PORTFOLIO®
        </div>
      </div>
      <div className="right-page" style={{ overflow: 'scroll' }}>
        <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
          <h1>
            <span style={{ color: 'rgba(255, 255, 255, 0.85)' }}>Personal/Interest</span><br />
          </h1><br /><br /><br />
          <img className={styles.homepageimg} src={Data} alt="Data and its Manipulation!" /><br /><br />
          <span style={{ color: '#ffed00' }}>Data and its Manipulation</span><br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>How can you define life's instances?</i> — How can you formulate extrapolations for these instances?
          — consideration of the most basic forms and analysis of everything. <br /><br /><br /><br /><br />
          <img className={styles.homepageimg} src={Design} alt="Design and Implementation" /><br /><br />
          <span style={{ color: '#ffed00' }}>Design and Implementation</span><br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Minimalistic, yet Complex?</i> — A Living Contradiction; Splitting myself into pages. — these ideas are the inspiration for this site.
          — a wreckage of variables, beauty in simplified layers. <br /><br /><br /><br /><br />
          <div style={{ textAlign: 'center' }}><h2>Cohesion is bliss, enjoy yourself. </h2></div><br /><br /><br />
          <video className={styles.homepagevideo} autoPlay muted loop playsInline>
            <source src={Music} type="video/webm" />
            <script type="application/ld+json">{JSON.stringify(musicVideoData)}</script>
          </video><br /><br />
          <span style={{ color: '#ffed00' }}>Music and the Visual Arts</span><br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Create and Consume</i> — A cathartic release of emotion. As humans, we are led to consume that which targets our senses and emotions.
          Since these forms of media are the most accessible, they are also the most powerful.<br /><br /><br /><br />
          <video className={styles.homepagevideo} autoPlay muted loop playsInline>
            <source src={Photocomp} type="video/webm" />
            <script type="application/ld+json">{JSON.stringify(personalityVideoData)}</script>
          </video><br /><br />
          <span style={{ color: '#ffed00' }}>Personality and Drive</span><br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Driven, Easy-Going, Eager to Do Things</i> — It's always hard to tell a person's true personality through only words on a screen.
          Visuals tend to speak louder to me.<br /><br /><br /><br /><br />
          <div style={{ textAlign: 'center' }}><Link to="/personal">SEE ALL POSTS</Link><br /><br /><br /><br /></div><br /><br />
        </span>
      </div>
    </div>
  );
}

export default Homepage;