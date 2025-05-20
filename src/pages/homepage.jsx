/** @format */

import {
  ShellImg,
  DijkstrasImg,
  RacketImg,
  HashImg,
  ReceiptifyImg,
  rrImg,
  Design,
  Music,
  Data,
  Photocomp,
} from "../images"
import { musicVideoData, personalityVideoData } from "../videoData"
import styles from "./homepage.module.css"
import { React, useEffect, useRef } from "react"
import "./pages.css"
import { HomeTopnav, Bottomnav, Mobilenav } from "../components"
import { Link } from "react-router-dom"

const Homepage = () => {
  const leftPageRef = useRef(null)
  const rightPageRef = useRef(null)

  useEffect(() => {
    document.title = "homepage - mohid tanveer portfolio"
  }, [])

  return (
    <div className="Homepage">
      <HomeTopnav leftPageRef={leftPageRef} rightPageRef={rightPageRef} />
      <Bottomnav />
      <Mobilenav />
      <div
        className="left-page"
        ref={leftPageRef}
        style={{ overflow: "scroll" }}
      >
        <h1>
          Work/Projects
          <br />
        </h1>
        <br />
        <br />
        <br />
        <Link to="/work/rr">
          <img className={styles.homepageimg} src={rrImg} alt="#RR" />
          <br />
          ##RR - C
        </Link>
        <br />
        May 2023
        <br />
        <br />
        <br />
        <Link to="/work/receiptify">
          <img
            className={styles.homepageimg}
            src={ReceiptifyImg}
            alt="I need REST."
          />
          <br />I need REST. - React.js/Python/HTML/CSS
        </Link>
        <br />
        July 2023
        <br />
        <br />
        <br />
        <Link to="/work/hash">
          <img
            className={styles.homepageimg}
            src={HashImg}
            alt="Where's the Hash?"
          />
          <br />
          Where's the Hash? - C
        </Link>
        <br />
        April 2023
        <br />
        <br />
        <br />
        <Link to="/work/racket">
          <img
            className={styles.homepageimg}
            src={RacketImg}
            alt="What’s that Racket?"
          />
          <br />
          What’s that Racket? - Java
        </Link>
        <br />
        April 2023
        <br />
        <br />
        <br />
        <Link to="/work/dijkstras">
          <img
            className={styles.homepageimg}
            src={DijkstrasImg}
            alt="It’s just Dijkstra’s?"
          />
          <br />
          It’s just Dijkstra’s? - Racket
        </Link>
        <br />
        March 2023
        <br />
        <br />
        <br />
        <Link to="/work/blueshell">
          <img
            className={styles.homepageimg}
            src={ShellImg}
            alt="Blue Shell!"
          />
          <br />
          Blue Shell! - C
        </Link>
        <br />
        Feb 2023
        <br />
        <br />
        <br />
        <div style={{ textAlign: "center" }}>
          <Link to="/work">SEE ALL PROJECTS</Link>
          <br />
          <br />
          <br />
        </div>
        <br />
        <br />
        <br />
      </div>
      <div className="centerlogo">
        <div className="centerlogoo">
          <div className="version">v1.23.03</div>
          MOHID TANVEER™
          <br />
          PORTFOLIO®
        </div>
      </div>
      <div
        className="right-page"
        ref={rightPageRef}
        style={{ overflow: "scroll" }}
      >
        <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>
          <h1>
            <span style={{ color: "rgba(255, 255, 255, 0.85)" }}>
              Personal/Interests
            </span>
            <br />
          </h1>
          <br />
          <br />
          <br />
          <img
            className={styles.homepageimg}
            src={Data}
            alt="Data and its Manipulation!"
          />
          <br />
          <br />
          <span style={{ color: "#f00" }}>Data and its Manipulation</span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <i>How can you define life's instances?</i> — How can you formulate
          extrapolations for these instances? — consideration of the most basic
          forms and analysis of everything. <br />
          <br />
          <br />
          <br />
          <img
            className={styles.homepageimg}
            src={Design}
            alt="Design and Implementation"
          />
          <br />
          <br />
          <span style={{ color: "#f00" }}>Design and Implementation</span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Minimalistic, yet Complex?</i> — A
          Living Contradiction; Splitting myself into pages. — these ideas are
          the inspiration for this site. — a clash of variables, beauty in
          simplified layers. <br />
          <br />
          <br />
          <br />
          <video
            className={styles.homepagevideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Music} type="video/mp4" />
            <script type="application/ld+json">
              {JSON.stringify(musicVideoData)}
            </script>
          </video>
          <br />
          <br />
          <span style={{ color: "#f00" }}>Music and the Visual Arts</span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Create and Consume</i> — A cathartic
          release of emotion. As humans, we are led to consume that which
          targets our senses and emotions. Since these forms of media are the
          most accessible, they are also the most powerful.
          <br />
          <br />
          <br />
          <br />
          <video
            className={styles.homepagevideo}
            autoPlay
            muted
            loop
            playsInline
          >
            <source src={Photocomp} type="video/mp4" />
            <script type="application/ld+json">
              {JSON.stringify(personalityVideoData)}
            </script>
          </video>
          <br />
          <br />
          <span style={{ color: "#f00" }}>Personality and Drive</span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <i>Driven, Easy-Going, Eager to Do Things</i> — It's tough to tell a
          person's true personality through only words on a screen. Visuals tend
          to speak louder to me.
          <br />
          <br />
          <br />
          <br />
          <br />
          <div style={{ textAlign: "center" }}>
            <Link to="/personal">VIEW PERSONAL PAGE</Link>
            <br />
            <br />
            <br />
            <br />
          </div>
          <br />
          <br />
        </span>
      </div>
    </div>
  )
}

export default Homepage
