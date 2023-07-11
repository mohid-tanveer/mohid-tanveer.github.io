import { AutocorrectImg, AutocorrectVid } from '../../images';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav } from '../../components';

const Duckingautocorrect = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Worknav leftUrl="/work/blueshell" rightUrl="/work/sentiment" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>Ducking Autocorrect.</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
              <i>Created in Java — NOVEMBER 2022 — </i>
              <a href="https://github.com/mohid-tanveer/java-projects/tree/main/autocomplete" rel="noopener noreferrer" target="_blank">repository link</a><br />
              This project was created during my Data Structures and Algorithms course. In comparison to the Sentiment Analysis program,
              this program needed to be able to handle much larger data sets. The program takes in a text file of words and maps their 
              frequencies into a hash map. Using these mapped frequencies we are able to use an algorithm to predict either the rest of the
              characters based on the user's current input splice or the most likely word they meant to type if there are errors in their 
              complete input. I also implemented a quicksort algorithm to sort possible suggestions in order of frequency. The program also
              has a very basic GUI implementation that allows for input and provides suggestions in real time as you can see in the video
              on the right. The program allows you to choose the hash map size and which file to use as input, in the example I used a nyt.txt
              file that contains 164847 sentences from the New York Times and used a map size of 10000 as seen in this <a href={AutocorrectImg} rel="noopener noreferrer" target="_blank">screenshot</a> 
              .&nbsp;This project displays an ability to iterate through files of large sizes and parse their contents
              into a data structure properly. It also displays the ability to implement and utilize a sorting algorithm and a hash map data structure in
              order to apply them in a useful manner. You can browse the source code on the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <video alt="Autocorrect Video Example" autoPlay muted loop playsInline style={{width: '100%', height: 'auto', maxWidth: '1300px', borderRadius: '20px'}} src={AutocorrectVid} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Duckingautocorrect;