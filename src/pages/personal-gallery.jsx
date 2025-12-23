import { React, useEffect, useMemo, useState } from "react"
import { Link } from "react-router-dom"
import classNames from "classnames"
import {
  slideImages,
  horizSlideImages,
  slideThumbnails,
  horizSlideThumbnails,
} from "../images"
import { Topnav, Bottomnav, Mobilenav } from "../components"
import styles from "./personal-gallery.module.css"
import "./pages.css"

const PersonalGallery = () => {
  const [activeImage, setActiveImage] = useState(null)
  const [isFullImageLoaded, setIsFullImageLoaded] = useState(false)

  useEffect(() => {
    document.title = "photography - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  useEffect(() => {
    if (!activeImage) return
    setIsFullImageLoaded(false)

    const onKeyDown = (e) => {
      if (e.key === "Escape") setActiveImage(null)
    }

    const previousOverflow = document.body.style.overflow
    document.body.style.overflow = "hidden"
    window.addEventListener("keydown", onKeyDown)

    return () => {
      document.body.style.overflow = previousOverflow
      window.removeEventListener("keydown", onKeyDown)
    }
  }, [activeImage])

  const images = useMemo(() => {
    const maxLen = Math.max(slideImages.length, horizSlideImages.length)
    const merged = []

    for (let i = 0; i < maxLen; i += 1) {
      if (slideImages[i]) {
        merged.push({
          thumb: slideThumbnails[i] ?? slideImages[i],
          full: slideImages[i],
        })
      }
      if (horizSlideImages[i]) {
        merged.push({
          thumb: horizSlideThumbnails[i] ?? horizSlideImages[i],
          full: horizSlideImages[i],
        })
      }
    }

    return merged
  }, [])

  const personalPage = classNames(styles.page, styles.content)

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <div className={personalPage}>
        <div className={styles.headerRow}>
          <h1>
            <span style={{ color: "rgba(255, 255, 255, 0.65)" }}>
              photography.
            </span>
          </h1>
          <Link className={styles.backLink} to="/personal">
            back to personal
          </Link>
        </div>

        <div className={styles.subhead}>
          A collection of some pictures I have taken.
        </div>

        <div className={styles.gallery}>
          {images.map((image, index) => (
            <button
              key={`${image.full}-${index}`}
              type="button"
              className={styles.tile}
              onClick={() => setActiveImage(image)}
              aria-label={`view photo ${index + 1}`}
            >
              <img
                className={styles.img}
                src={image.thumb}
                alt=""
                decoding="async"
                fetchPriority={index < 6 ? "high" : "low"}
              />
            </button>
          ))}
        </div>
      </div>

      {activeImage ? (
        <div
          className={styles.modalBackdrop}
          role="dialog"
          aria-modal="true"
          onClick={(e) => {
            if (e.target === e.currentTarget) setActiveImage(null)
          }}
        >
          <div className={styles.modal}>
            <div className={styles.modalMedia}>
              {!isFullImageLoaded ? (
                <img
                  className={styles.modalThumb}
                  src={activeImage.thumb}
                  alt=""
                  decoding="async"
                />
              ) : null}
              <img
                className={styles.modalImg}
                src={activeImage.full}
                alt=""
                decoding="async"
                onLoad={() => setIsFullImageLoaded(true)}
                style={{ display: isFullImageLoaded ? "block" : "none" }}
              />
            </div>
          </div>
        </div>
      ) : null}
    </div>
  )
}

export default PersonalGallery
