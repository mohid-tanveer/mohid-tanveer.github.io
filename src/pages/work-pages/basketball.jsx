import { basketballImg } from "../../images"
import { basketballPaper } from "../../files"
import { React, useEffect } from "react"
import "../pages.css"
import { Topnav, Bottomnav, Worknav, Mobilenav } from "../../components"

const Basketball = () => {
  useEffect(() => {
    document.title = "Ball don't lie - mohid tanveer portfolio"
    window.scrollTo(0, 0)
  }, [])

  return (
    <div>
      <Topnav />
      <Bottomnav />
      <Mobilenav />
      <Worknav leftUrl="" rightUrl="/work/rephoto" />
      <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Ball don't lie</h1>
            <br />
            <br />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <i>Created in Python — DECEMBER 2025 — </i>
              <a
                href="https://github.com/FardinHaque60/cse250a_bball_prediction_model"
                rel="noopener noreferrer"
                target="_blank"
              >
                repository link
              </a>
              <br />
              <br />
              Created for my Probabilistic Reasoning and Learning course at
              UCSD, "Predicting Basketball Game Outcomes Using Markov Modeling"
              is a collaborative project that uses Hidden Markov Models (HMMs)
              to predict NBA game outcomes by leveraging the “Four Factors”
              performance metric. The Four Factors, originally defined by Dean
              Oliver, combine shooting efficiency, turnover rate, offensive
              rebounding, and free-throw generation into a single weighted
              statistic intended to summarize how well a team performed in a
              game.
              <br />
              <br />
              While the Four Factors carry a strong predictive signal, they do
              not capture more nuanced aspects of team performance and how this
              evolves over the course of a season. Game outcomes are not
              independent events, and teams often experience fluctuations in
              form, rhythm, and what many fans refer to as “momentum”. Since the
              Four Factors offer only a noisy view of a team's underlying
              competitive state, we framed the problem as a sequential modeling
              task, treating each team's season as an HMM.
              <br />
              <br />
              Modeling an NBA season this way allows us to encode the idea that
              each game's outcome depends not only on the isolated performance
              in an individual game, but also the latent (unobserved or
              intangible) state of the team as it evolves over time. This hidden
              state represents the underlying win/loss condition, while the
              observed Four Factor score is modeled as being generated from this
              hidden state (team's performance). This structure captures both
              temporal dependencies: 1. how likely a team is to remain in a
              "flow state" or transition to a "downswing", and 2. the
              uncertainty in interpreting per-game performance, since there is
              an element of randomness in game outcomes.
              <br />
              <br />
              For this project, I was responsible for implementing the HMM
              model, including its training, evaluation, and tuning, with some
              nuance around supporting both supervised and unsupervised
              training. Since our constructed dataset included wins and losses,
              our "hidden state" could be designated as the W/L signal observed
              after each game. In that setup, the model is trained using Maximum
              Likelihood Estimation (MLE) to estimate the HMM parameters that
              best fit the data. While the W/L signal is observable during
              training, when inferring from Four Factor values for a future
              game, the W/L signal is unknown and is treated as a hidden state.
              <br />
              <br />
              On the other hand, I also implemented an unsupervised version of
              the model, where we train the model blind to the W/L signal using
              the Baum-Welch Expectation-Maximization (EM) algorithm. In this
              setup, we designate K hidden states, each representing an
              underlying performance state that would map to a particular W/L
              outcome. This approach allows us to model different ways a team
              can perform in getting a win or loss by the model learning the
              transition probabilities between these hidden states as well as
              identifying the type of Four Factor values that a given
              performance state is likely to produce.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="" src={basketballImg} />
            <span style={{ color: "rgba(0, 0, 0, 0.65)" }}>
              <br />
              <br />
              To verify the effectiveness of the model, my teammates developed
              Markov Chain and Four Factor Threshold baseline models to compare
              against the HMM model I implemented. To train all of these models,
              we used regular season data from the 2000-2017 and 2019-2023
              seasons, while we tested the models on the 2018 and 2024 seasons.
              At test time, we generate a predicted 82-game sequence for each
              team using their Four Factor values and compare against the actual
              W/L sequence for their season. The Markov Chain and Threshold
              models achieve a 56.5% and 65.8% accuracy, respectively; the
              latter of which represents relying solely on the Four Factor
              values to predict the outcome of a game. The supervised HMM model
              achieves a 74.1% accuracy, while the unsupervised HMM model
              achieves a 72.3% accuracy, outperforming both baseline models as
              well as being on par with or even outperforming other models we
              looked at in our literature review (65-72% accuracy).
              <br />
              <br />
              You can read more about the technical details of the project in
              the repository linked above or read our paper{" "}
              <a
                href={basketballPaper}
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

export default Basketball
