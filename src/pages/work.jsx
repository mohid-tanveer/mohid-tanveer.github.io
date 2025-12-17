import {
  shellImg,
  rrImg,
  websiteImg,
  receiptifyImg,
  tubifyImg,
  ragsImg,
  basketballImg,
  rephotoImg,
} from "../images"
import { React, useEffect } from "react"
import "./pages.css"
import { Topnav, Bottomnav, Mobilenav } from "../components"
import { Link } from "react-router-dom"

const Work = () => {
  useEffect(() => {
    document.title = "projects - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div className="work">
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <div class="worklist">
        <h1>Work/Projects</h1>
        <br />
        <br />
        <br />
        <div class="grid-containerwork">
          <div class="grid-itemwork">
            <Link to="/work/basketball">
              <img src={basketballImg} alt="Ball don't lie" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  Ball don't lie - Python
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/rephoto">
              <img src={rephotoImg} alt="ScreenSense" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  ScreenSense - Python
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/rags">
              <img src={ragsImg} alt="From RAGs to Riches" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  From RAGs to Riches - Python/Typescript
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/tubify">
              <img src={tubifyImg} alt="Tubify" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  Tubify - Typescript/React.js/Python/SQL
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/receiptify">
              <img src={receiptifyImg} alt="I need REST." />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  I need REST. - JavaScript/React.js/Python
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/website">
              <img src={websiteImg} alt="this website." />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  this website. - JavaScript/React.js
                </span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/rr">
              <img src={rrImg} alt="#RR" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>##RR - C</span>
              </p>
            </Link>
          </div>
          <div class="grid-itemwork">
            <Link to="/work/blueshell">
              <img src={shellImg} alt="Blue Shell!" />
              <p>
                <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
                  Blue Shell! - C
                </span>
              </p>
            </Link>
          </div>
        </div>
      </div>
      <br />
    </div>
  )
}

export default Work
