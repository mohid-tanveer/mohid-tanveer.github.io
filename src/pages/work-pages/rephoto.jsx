import { rephotoImg } from "../../images"
import { screenSensePaper } from "../../files"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"

const Rephoto = () => {
  useEffect(() => {
    document.title = "ScreenSense - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/basketball" rightUrl="/work/rags" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>ScreenSense</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in Python — DECEMBER 2025 — </i>
              <a
                href="https://github.com/mohid-tanveer/rephoto-detection"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              Created for my Computer Security course at UCSD, ScreenSense is a
              project that uses EXIF metadata and pixel-level forensic analysis
              to distinguish authentic photos from screen re-photos (photos of a
              photo on a screen). The use for such a tool may not be immediately
              evident; however, as generative models like ChatGPT and Google's
              Nano Banana Pro continue improving at creating lifelike images,
              it's getting increasingly difficult to distinguish between real
              and AI photos.
              <br />
              <br />
              To combat this issue, organizations like the C2PA (Coalition for
              Content Provenance and Authenticity) have been working to create a
              standard for identifying and verifying the provenance of content.
              When an image is C2PA signed, the image has been verified as an
              authentic physical capture (this happens at the time of capture by
              the camera). However, this does not protect against malicious
              actors who may take a photo of an AI-generated image and pass it
              off as a signed physical capture.
              <br />
              <br />
              ScreenSense protects against this exact scenario by combining
              wavelet and CNN modeling of spatial RGB content, subpixel
              analysis, and EXIF metadata to identify screen re-photos. The
              model achieves perfect separation on the test set (AUC = 1.0). You
              can read more about the technical details of the project in the
              repository linked above or read the paper{" "}
              <a
                href={screenSensePaper}
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="" src={rephotoImg} />
          </div>
        </div>
      </div>
    </div>
  )
}

export default Rephoto
