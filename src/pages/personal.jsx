/** @format */

import { Data, Design, Music, slideImages, horizSlideImages } from "../images"
import { musicVideoData } from "../videoData"
import styles from "./personal.module.css"
import { React, useEffect } from "react"
import "./pages.css"
import { Topnav, Bottomnav, Mobilenav } from "../components"
import classNames from "classnames"

const Personal = () => {
  useEffect(() => {
    document.title = "personal info - mohid tanveer portfolio"
    window.scrollTo(0, 0)

    const preloadImages = (images) => {
      images.forEach((image) => {
        const img = new Image()
        img.src = image
      })
    }

    preloadImages(slideImages)
    preloadImages(horizSlideImages)
  }, [])

  const personalPage = classNames(styles.personalbody, "interestsblog")

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <div className={personalPage}>
        <h1>
          <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>
            What makes [me] me.
          </span>
        </h1>
        <br />
        <br />
        <br />
        <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>
          <img
            className={styles.personalimg}
            src={Data}
            alt="Data and its Manipulation"
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
          &nbsp; &nbsp; &nbsp; &nbsp; I am interested in the design and
          algorithmic nature of data structures within computer science. Such as
          with data collection/grouping and techniques to manipulate it in order
          to answer different questions like: "what to recommend someone" or
          "what is the likelihood of this patient having this disease."
          Developing solutions to these questions are what drives me within the
          field.
          <br />
          <br />
          <br />
          <img
            className={styles.personalimg}
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
          &nbsp; &nbsp; &nbsp; &nbsp; When creating I like to be deliberate and
          thoughtful in what I do, I want everything to have its meaning and
          place within the whole. To create something that stimulates minds
          <br />
          <br />
          <br />
          <video
            className={styles.personalvideo}
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
          <br />
          <span style={{ color: "rgb(100, 0, 255)" }}>
            Music and the Visual Arts
          </span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp; <i>Create and Consume</i> — A cathartic
          release of emotion. As humans we are led to consume that which targets
          our senses and emotions. Since these forms of media are the most
          accessible, I believe they are also the most powerful. <br />
          &nbsp; &nbsp; &nbsp; &nbsp; Growing up I was always fascinated by the
          idea of creation. In high school I taught myself how to produce music,
          mix and master, and play guitar and have been learning ever since. I
          believe that this mindset of continuous learning enables me to be a
          better developer/designer through an intrinsic motivation to learn how
          to create and apply my skills more cohesively and effectively in the
          field.
          <br />
          <br />
          <br />
          <br />
          <div className={styles.carouselWrapper}>
            <div className={styles.carouselColumn}>
              <div
                className={`${styles.imageSliderContainer} ${styles.verticalSlider}`}
              >
                <div className={styles.imageSlider}>
                  {slideImages.map((slideImage, index) => (
                    <img
                      key={index}
                      src={slideImage}
                      alt={`Slide ${index + 1}`}
                      className={`${styles.slideImage} ${styles.verticalImage}`}
                    />
                  ))}
                </div>
              </div>
            </div>
            <div className={styles.carouselColumn}>
              <div className={styles.imageSliderContainer}>
                <div className={styles.imageSlider}>
                  {horizSlideImages.map((slideImage, index) => (
                    <img
                      key={index}
                      src={slideImage}
                      alt={`Slide ${index + 1}`}
                      className={`${styles.slideImage} ${styles.horizontalImage}`}
                    />
                  ))}
                </div>
              </div>
            </div>
          </div>
          <br />
          <br />
          <span style={{ color: "rgb(100, 0, 255)" }}>Photography</span>
          <br />
          &nbsp; &nbsp; &nbsp; &nbsp;{" "}
          <i>Sample of Some Pictures I Have Taken</i>
          <br />
          <br />
          <br />
          <br />
        </span>
      </div>
    </div>
  )
}

export default Personal
