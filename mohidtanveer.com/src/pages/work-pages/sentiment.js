import { SentimentImg } from '../../images';
import { SentimentMD } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav } from '../../components';

const Sentiment = () => {
  useEffect(() => {
    window.scrollTo(0, 0); // Scrolls to the top when the component mounts
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Worknav leftUrl="/work/duckingautocorrect" rightUrl="" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Why the Long Face?</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                <i>Created in Java — OCTOBER 2022 — </i>
                <a href="https://github.com/mohid-tanveer/java-projects/tree/main/sentimentanalysis" rel="noopener noreferrer" target="_blank">repository link</a><br />
                This project was created during my Data Structures and Algorithms course. I first implemented the data structure that would be utilized by the program
                which was a map implemented with a binary search tree. The program itself is a sentiment analysis program that takes in a text file and 
                calculates the average sentiment of reviews, allowing for the user to input their own sentences and calculate the sentiment of their statement. 
                The BST map stores a collection of words with their frequencies and total scores from reviews in order to calculate the sentiment of user input.
                The scores range from 0 to 4 with 0 being the worst and 4 being the most positive score. <a href={SentimentMD} rel="noopener noreferrer" target="_blank">Here</a> 
                &nbsp;is an example of the program in action. You can obviously see that the algorithm implemented in the program is not perfect, especially when dealing
                with cases of sarcasm. However, it is a good example of how a simple algorithm can be useful in approximating the sentiment of a statement. The main objectives
                of this project were to implement a BST map and to practice scanning through files and isolating necessary information. You can browse the source code on
                the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img src={SentimentImg} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Sentiment;