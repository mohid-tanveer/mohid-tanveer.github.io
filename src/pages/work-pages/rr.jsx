import { rrImg } from "../../images"
import { rrMD, rrDOC } from "../../files"
import { React, useEffect, useState } from "react"
import "../pages.css"
import {
  Topnav,
  Bottomnav,
  Worknav,
  Mobilenav,
  MarkdownViewer,
} from "../../components"

const RR = () => {
  const [isMarkdownOpen, setIsMarkdownOpen] = useState(false)
  const [isRrDocOpen, setIsRrDocOpen] = useState(false)
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "##rr - mohid tanveer portfolio"
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/website" rightUrl="/work/blueshell" />
      <MarkdownViewer
        markdownUrl={rrMD}
        isOpen={isMarkdownOpen}
        onClose={() => setIsMarkdownOpen(false)}
      />
      <MarkdownViewer
        markdownUrl={rrDOC}
        isOpen={isRrDocOpen}
        onClose={() => setIsRrDocOpen(false)}
      />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>##RR</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in C — MAY 2023 — </i>
              <a
                href="https://github.com/mohid-tanveer/c-projects/tree/main/3rhodesramble-yikyakclone"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              On college campuses, such as Rhodes, apps like Yik Yak are quite
              popular. Such apps allow users to post anonymously and view posts
              from other users in their area. It essentially operates like
              Twitter, except your 'tweets' are anonymous and only visible to
              people in your specific geolocation (in this case, the Rhodes
              campus and surrounding area). In creating this, I gained
              considerable experience with client/server programming,
              networking, and project management skills. In doing so, I was also
              able to put my hash map implementation to use in an application.
              Unlike Yik Yak, Rhodes Ramble is a command-line application. The
              user can create an account, log in, post, and view posts from
              other users. The user can also view the most popular posts, which
              are determined by the number of likes (represented by a karma
              value) they have received. This application also did not implement
              the geolocation features of Yik Yak; instead, it ran on a single
              server on campus, requiring users to be connected to the Rhodes
              network to use the application.{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setIsMarkdownOpen(true)
                }}
              >
                Here
              </a>{" "}
              is a sample interaction with the application. You can browse the
              source code by request at the repository linked above and read
              more about the project and its structure in the README.md{" "}
              <a
                href="#"
                onClick={(e) => {
                  e.preventDefault()
                  setIsRrDocOpen(true)
                }}
              >
                here
              </a>
              .
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="#RR" src={rrImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default RR
