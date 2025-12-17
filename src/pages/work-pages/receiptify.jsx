import { receiptifyImg, receiptifyVid } from "../../images"
import {} from "../../files"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"

const Receiptify = () => {
  useEffect(() => {
    document.title = "i need REST. - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/tubify" rightUrl="/work/website" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>I need REST.</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in JavaScript/React.js/Python — JULY 2023 — </i>
              <a
                href="https://github.com/mohid-tanveer/receiptify-clone"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              This Receiptify clone started as part of a larger project I'm (at
              the time of writing) still working on that doesn't have a
              finalized name yet (currently called "weLikethis"). It served as a
              way to test working with a RESTful API (Spotify's) and integrating
              a database. Since this was implemented with a larger project in
              mind, there is a very basic user system that is in the works that
              you can see within the code/database, as well as in the video
              linked at the bottom of the page that shows the project in action.
              <br />
              <br />
              The application consists of a React frontend for user interaction
              and navigation, paired with a Flask backend that runs
              concurrently. The backend is responsible for handling all
              communication with Spotify's API as well as creating, reading, and
              updating database records. Rather than calling Spotify directly
              from the frontend, I implemented a custom API layer in Flask. The
              backend uses the requests library to communicate with Spotify's
              Web API and pymongo for database operations. The database used in
              this prototype is MongoDB (although I'm transitioning to a SQL
              database for the main project). It is currently hosted locally and
              stores user records like the Spotify auth token.
              <br />
              <br />
              <a href={receiptifyVid} rel="noopener noreferrer" target="_blank">
                Here
              </a>{" "}
              is a video showing the frontend and backend in action. You can
              browse the source code for the project at the repository linked
              above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="i need REST." src={receiptifyImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Receiptify
