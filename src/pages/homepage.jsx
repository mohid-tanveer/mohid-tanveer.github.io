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
} from "../images"
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
          <span style={{ color: "rgb(100, 0, 255)" }}>
            Data and its Manipulation
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <i>How can you define life's instances?</i> — How can you formulate
          extrapolations for these instances? <br />
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
          <span style={{ color: "rgb(100, 0, 255)" }}>
            Design and Implementation
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Minimalistic, yet Complex?</i> — A
          Living Contradiction; a clash of variables, beauty in nested layers.{" "}
          <br />
          <br />
          <br />
          <br />
          <img className={styles.homepageimg} src={Music} alt="Music" />
          <br />
          <br />
          <span style={{ color: "rgb(100, 0, 255)" }}>
            Music and the Visual Arts
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Create and Consume</i> — A cathartic
          release of emotion. As humans, we are led to consume that which
          targets our senses and emotions. Since these forms of media are the
          most accessible, I believe they are also the most powerful.
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
