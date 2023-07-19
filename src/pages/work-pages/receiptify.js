import { ReceiptifyImg, ReceiptifyVid } from '../../images';
import {  } from '../../files';
import { React, useEffect } from 'react';
import '../pages.css';
import { Topnav, Bottomnav, Worknav, Mobilenav } from '../../components';

const Receiptify = () => {
  useEffect(() => {
    document.title = "i need REST. - mohid tanveer portfolio";
    window.scrollTo(0, 0);
  }, []);

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <Worknav leftUrl="" rightUrl="/work/website" />
        <div class="workindex">
        <div class="grid-container5050">
          <div class="grid-item5050">
            <h1>I need REST.</h1><br /><br />
            <span style={{ color: 'rgba(0, 0, 0, 0.65)' }}>
                <i>Created in React.js/Python/HTML/CSS — JULY 2023 — </i>
                <a href="https://github.com/mohid-tanveer/receiptify-clone" rel="noopener noreferrer" target="_blank">repository link</a><br />
                This receiptify clone was started as a project I am currently working on that does not have a finalized name (currently called "weLikethis") and 
                this just served as a way to test using a RESTful API such as Spotify's and using the MongoDB database. The way this is implemented is with 
                the intent of working on the other project, so there is a very basic user system that is in works that you can see within the code and in the 
                database as well as the video that I will link later on below that shows the project in action. Along with the React.js code allowing the 
                user to navigate the site, there is also a Python backend that runs simultaneously that handles all of the API calls to Spotify along 
                with initializing and modifying the database. The way I chose to implement this was as my own API that I could call from the frontend. 
                This was done by using Flask to create the server and then using the requests library to make calls to Spotify's API and pymongo to make 
                calls to the database. The database is a MongoDB database that is hosted currently on the localhost and holds the users along with their 
                code (which is returned by the Spotify API during authentication in order to make the authentication flow only necessary to occur once), 
                their current Spotify token, and the expiration date of this token so that it can be refreshed when necessary. The user flow of the project 
                is as follows: the user is prompted to enter a username, then are able to login with their spotify account and authenticate the app, they are 
                then able to navigate to the receiptify page where they are able to select from three time ranges (last month, last 6 months, and all time) 
                which will each display the user's top 10 songs within that time range. In the backend the flow parallel to the user-flow operates as 
                follows: when the user clicks to login with spotify the backend returns the authentication link for the app to the frontend which redirects 
                to the spotify login page, when the user is redirected from the authentication page back to the app, the backend is again called this time 
                with the code that was returned in order to create the user profile within the database and create the first user token, when the user opens 
                the receiptify page, the backend is instantly called to access the user's top songs from all time ranges and returns it to the frontend 
                which formats the data into HTML code and displays it to the user. <a href={ReceiptifyVid} rel="noopener noreferrer" target="_blank">Here</a> is a video
                showing the frontend and backend in action. You can browse the source code for the project at the repository linked above.
            </span>
          </div>
          <div class="grid-item5050">
            <img alt="i need REST." src={ReceiptifyImg} />
          </div>
        </div>
    </div>
    </div>
  );
}

export default Receiptify;