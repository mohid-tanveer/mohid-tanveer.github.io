import { tubifyImg } from "../../images"
import {} from "../../files"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"
import { Link } from "react-router-dom"

const Tubify = () => {
  useEffect(() => {
    document.title = "Tubify - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="/work/rags" rightUrl="/work/receiptify" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Tubify</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in Typescript/React.js/Python/SQL — APRIL 2025 — </i>
              <a
                href="https://github.com/mohid-tanveer/tubify"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              There was a time when music discovery felt organic; when actual
              people curated recommendations that influenced what we listened
              to, shaping the tastes of an entire generation. The rise of
              streaming has made music more accessible than ever, but it's also
              shifted control into the hands of manipulated algorithms and
              record labels, prioritizing reach over resonance. Tubify is our
              attempt to bring back that human touch. Where the best
              recommendations don't come from faceless algorithms, but from the
              people who know you best: your friends.
              <br />
              <br />
              This project was sort of a brainchild of mine from the summer of
              2023 (mentioned in <Link to="/work/receiptify">I need REST.</Link>
              ) that had been simmering for a little over a year. What started
              as a simple idea of contributing to the social aspect of listening
              to music by allowing users to see what songs they like in common
              with their friends, opening avenues for conversation and
              discovery, quickly evolved into a sort of hyper-fixation on the
              second part of that statement: social-powered music discovery. I
              had no prior knowledge regarding the inner workings of
              recommendation systems, and how they already take into account
              social data to make recommendations. But hell, what's the harm in
              learning through doing?
              <br />
              <br />
              Rather than focusing on how to make something different, I first
              focused on learning exactly how they functioned, and what role
              music machine learning played in the process, leading me to a
              second hyper-fixation. Since I already had experience with sound
              design and music production, I was drawn into how audio signal
              processing and machine learning intertwined, and I consulted with
              one of my professors at Rhodes, Dr. Phillip Kirlin, whose research
              focus lies within music informatics. He provided me with
              recommendations for books and papers to look into for both music
              recommendation systems and audio signal processing, directing me
              toward some of the techniques I employed in the project.
              <br />
              <br />
              After building a solid foundation, I started building things;
              naturally, the project shifted from just comparing users' liked
              songs to modeling why people gravitate toward certain tracks in
              the first place. Originally, I was planning on using Spotify's
              audio features API endpoint for audio analysis due to convenience.
              However, since Spotify removed access to these key attributes, I
              had to build my own pipeline from scratch if I wanted to keep
              audio features active in the model. I ended up implementing an
              audio analysis system using signal-processing techniques like
              Mel-frequency cepstral coefficients, spectral contrast, and tempo
              estimation to construct audio features that captured timbral and
              rhythmic characteristics.
              <br />
              <br />
              On top of this, I experimented with transformer-based embeddings
              using song lyrics to generate semantic vectors representing mood
              and thematic content. These two modalities (audio texture and
              lyrical meaning) fed into a similarity model I built for
              recommendations, where cosine similarity, nearest-neighbor search,
              and taste clustering helped surface tracks aligned with a user's
              taste profile.
              <br />
              <br />
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="Tubify" src={tubifyImg} />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              Keeping with the theme and goals of the project, I blended
              friends' embeddings which acted as an additional layer of context.
              The system looks for overlap and divergence among social circles,
              highlighting songs that resonate across friends while also nudging
              users toward tracks that sit just outside their usual cluster. I
              wanted to balance that tailored “you'd love this” feeling you get
              when sharing music with friends along with intentional diversity,
              so users weren't just trapped inside an echo chamber of their own
              listening habits.
              <br />
              <br />
              Coming into my last semester at Rhodes, we had the opportunity in
              our Senior Seminar course to work on a project of our choosing. I
              found other students who were interested in doing something
              related to music streaming and we settled on creating Tubify,
              inspired by MTV and that early 2000s music curation and discovery
              through music videos we grew up with. This combined my existing
              work and ideas with even more user-facing features and system
              design complexity, which you can read more about and watch demos
              of within the written documentation linked{" "}
              <a
                href="https://github.com/mohid-tanveer/tubify/blob/main/README.md"
                rel="noopener noreferrer"
                target="_blank"
              >
                here
              </a>
              .
            </span>
          </div>
        </div>
      </div>
    </div>
  )
}

export default Tubify
