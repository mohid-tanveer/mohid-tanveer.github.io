import { websiteImg } from "../../images"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"

const Website = () => {
  useEffect(() => {
    window.scrollTo(0, 0)
    document.title = "this website. - mohid tanveer portfolio"
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/receiptify" rightUrl="/work/rr" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>this website.</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in JavaScript/React.js — JULY 2023 — </i>
              <a
                href="https://github.com/mohid-tanveer/mohidtanveer.com"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              This project was started as a way to learn HTML and CSS and to
              create a portfolio website for myself. However, as I learned more
              about web development, I decided to learn the React framework and
              use it to finish the website. I went through multiple stages while
              building the website. At first, all I could do with HTML and CSS
              was create what looked like a Word document with a few links. Then
              I finally started to understand how HTML and CSS work together,
              getting to the point where I could create something that felt like
              an actual website with some personality and style.
              <br />
              <br />
              There were still a couple things I needed to learn and implement
              before I could feel proud of my work. For one, I wanted the
              experience to be consistent across devices and screen sizes.
              Additionally, I wanted a multi-page layout that gave me more
              flexibility in how people could navigate the site. I created the
              navbars on the top and bottom; however, rewriting the code for
              these on every page felt redundant and inefficient. That's when
              the TikTok algorithm kicked in and started pushing me videos about
              building sites with React. I decided to port everything over to
              React/JavaScript to learn more about the framework. Personally, I
              love how it turned out, and I'm glad I learned these web
              development skills so I can use them in future projects. You can
              browse the source code for the project at the repository linked
              above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="this website." src={websiteImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Website
