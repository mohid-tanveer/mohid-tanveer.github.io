import { ShellImg, AutocorrectVid, SentimentImg, DijkstrasImg, RacketImg, HashImg, rrImg, WebsiteImg, AutocorrectThumbnail, } from "../images";
import { React, useEffect } from 'react';
import './pages.css';
import { Topnav, Bottomnav, Mobilenav } from '../components';
import { Link } from 'react-router-dom';


const Work = () => {
    useEffect(() => {
        document.title = 'projects - mohid tanveer portfolio';
        window.scrollTo(0, 0); 
      }, []);

    return (
        <div className="work">
            <Topnav />
            <Bottomnav />
            <Mobilenav />
            <div class="worklist">
                <h1>Projects/Skills</h1><br /><br /><br />
                <div class="grid-containerwork">
                    <div class="grid-itemwork">
                        <Link to="/work/website"><img src={WebsiteImg} alt="this website." />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>this website. - React.js/Html/Css</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to="/work/rr"><img src={rrImg} alt="#RR" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>##RR - C</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to="/work/hash"><img src={HashImg} alt="Where's the Hash?" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Where's the Hash? - C</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to="/work/racket"><img src={RacketImg} alt="What’s that Racket?" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>What’s that Racket? - Java</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to="/work/dijkstras"><img src={DijkstrasImg} alt="It’s just Dijkstra’s?" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>It’s just Dijkstra’s? - Racket</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to="/work/blueshell"><img src={ShellImg} alt="Blue Shell!" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Blue Shell! - C</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to='/work/duckingautocorrect'><video autoPlay muted loop playsInline
                        style={{ borderRadius: '20px' }}><source src={AutocorrectVid} type="video/mp4"/>
                        <img src={AutocorrectThumbnail} alt="Ducking Autocorrect. Thumbnail" /></video>
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Ducking Autocorrect. - Java</span></p></Link>
                    </div>
                    <div class="grid-itemwork">
                        <Link to='/work/sentiment'><img src={SentimentImg} alt="Why the Long Face?" />
                        <p><span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>Why the Long Face? - Java</span></p></Link>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default Work;