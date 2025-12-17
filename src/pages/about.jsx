import { Analogsentimentalism, profilePic, Cloud } from "../images"
import { analogsentimentalismVideoData } from "../videoData"
import { Resume } from "../files"
import { React, useEffect } from "react"
import styles from "./about.module.css"
import "./pages.css"
import { Topnav, Bottomnav, Mobilenav } from "../components"

const videoBackground = (
  <video
    className={styles.aboutvideo}
    playsInline
    autoPlay
    loop
    muted
    preload="auto"
  >
    <source src={Analogsentimentalism} type="video/mp4" />
    <script type="application/ld+json">
      {JSON.stringify(analogsentimentalismVideoData)}
    </script>
  </video>
)

const About = () => {
  useEffect(() => {
    document.title = "about me - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])
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
              <span className={styles.abouth1}>
                Mohid Tanveer,
                <br />
                &nbsp;&nbsp;&nbsp;&nbsp;&nbsp;Split In Parts
              </span>
            </h1>
            <br />
            <br />
            <br />
            <div className={styles.aboutimg} style={{ textAlign: "right" }}>
              <img src={profilePic} alt="Profile" />
            </div>
            <br />
            <br />
            <div className={styles.skillsSection}>
              <div className={styles.skillsTitle}>Technical Skills</div>

              <div className={styles.skillCategory}>
                <span className={styles.categoryTitle}>
                  Programming Languages
                </span>
                <div className={styles.skillsList}>
                  <span className={styles.skillItem}>Python</span>
                  <span className={styles.skillItem}>C</span>
                  <span className={styles.skillItem}>Java</span>
                  <span className={styles.skillItem}>JavaScript</span>
                  <span className={styles.skillItem}>TypeScript</span>
                  <span className={styles.skillItem}>SQL</span>
                  <span className={styles.skillItem}>C++</span>
                  <span className={styles.skillItem}>R</span>
                  <span className={styles.skillItem}>Bash</span>
                  <span className={styles.skillItem}>HTML/CSS</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <span className={styles.categoryTitle}>
                  Frameworks & Libraries
                </span>
                <div className={styles.skillsList}>
                  <span className={styles.skillItem}>TensorFlow</span>
                  <span className={styles.skillItem}>PyTorch</span>
                  <span className={styles.skillItem}>PySpark</span>
                  <span className={styles.skillItem}>Apache Spark</span>
                  <span className={styles.skillItem}>NumPy</span>
                  <span className={styles.skillItem}>SciPy</span>
                  <span className={styles.skillItem}>Pandas</span>
                  <span className={styles.skillItem}>Matplotlib</span>
                  <span className={styles.skillItem}>React.js</span>
                  <span className={styles.skillItem}>Node.js</span>
                  <span className={styles.skillItem}>librosa</span>
                  <span className={styles.skillItem}>FastAPI</span>
                  <span className={styles.skillItem}>Flask</span>
                </div>
              </div>

              <div className={styles.skillCategory}>
                <span className={styles.categoryTitle}>DevOps & Tools</span>
                <div className={styles.skillsList}>
                  <span className={styles.skillItem}>Git/GitHub</span>
                  <span className={styles.skillItem}>Linux/Unix/GNU/RHEL</span>
                  <span className={styles.skillItem}>Docker</span>
                  <span className={styles.skillItem}>Kubernetes</span>
                  <span className={styles.skillItem}>Jupyter</span>
                  <span className={styles.skillItem}>Anaconda</span>
                  <span className={styles.skillItem}>Microsoft Power BI</span>
                  <span className={styles.skillItem}>
                    Amazon Web Services (AWS)
                  </span>
                  <span className={styles.skillItem}>Microsoft Azure</span>
                  <span className={styles.skillItem}>PostgreSQL</span>
                  <span className={styles.skillItem}>Virtual Machines</span>
                  <span className={styles.skillItem}>Slurm</span>
                  <span className={styles.skillItem}>Splunk</span>
                </div>
              </div>
            </div>
          </div>
          <div className="grid-item5050">
            <span className={styles.abouttext}>
              I mean what really makes a person who they are? I think it’s the
              company they keep; the people they collaborate with socially and
              professionally. You want to work with people who are adaptable,
              but also have a strong sense of self, driving you creatively and
              motivating you to innovate.
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; My name is Mohid Tanveer, I am a current
              master's student at UCSD studying Computer Science with a focus on
              AI/ML and a graduate from Rhodes College (class of 2025) with a BS
              in Computer Science. I am currently interested in recommendation
              systems, probabilistic modeling, and statistical methods;
              especially the effects applications of such topics can have in
              easing and improving our day to day lives and interactions.
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; During my senior year at Rhodes, I worked at
              St. Jude Children's Research Hospital as a Student AI Engineer
              with the High Performance Computing group. I also served as a peer
              tutor with the Rhodes CS Department during my last two years. You
              can read more about specific contributions in my resume or my
              LinkedIn profile linked below.
              <br />
              <br />
              &nbsp; &nbsp; &nbsp; I am the kind of person who loves to learn
              new skills and refine them. I think that nothing is ever perfect,
              and everything is an unfinished project.
              <br />
              &nbsp; &nbsp; &nbsp; I pride myself as an organized person, I like
              to keep everything in scope and work on things in parts,
              considering all the possibilities.
              <br />
              <br />
              &nbsp; &nbsp;&nbsp; All content (images and videos) and work found
              on the site are mine; inspiration from everywhere. Contact me
              using the links below or in the top right corner.
            </span>
            <br />
            <br />
            <div className={styles.cloudLinksContainer}>
              <a
                href={Resume}
                rel="noopener noreferrer"
                target="_blank"
                className={styles.cloudLink}
                style={{ backgroundImage: `url(${Cloud})` }}
              >
                Resume
              </a>
              <a
                href="https://www.linkedin.com/in/mohidtanveer/"
                rel="noopener noreferrer"
                target="_blank"
                className={styles.cloudLink}
                style={{ backgroundImage: `url(${Cloud})` }}
              >
                LinkedIn
              </a>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}

export default About
