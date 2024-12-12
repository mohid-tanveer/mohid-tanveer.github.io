import { Data, Design, Music, Photocomp, slideImages, horizSlideImages } from '../images';
import { musicVideoData, personalityVideoData } from '../videoData';
import styles from './personal.module.css'
import { React, useEffect } from 'react';
import './pages.css';
import { Topnav, Bottomnav, Mobilenav } from '../components';
import classNames from 'classnames';
import Carousel from 'react-multi-carousel';
import 'react-multi-carousel/lib/styles.css';

const Personal = () => {
  useEffect(() => {
    document.title = 'personal info - mohid tanveer portfolio';
    window.scrollTo(0, 0);

    const preloadImages = (images) => {
      images.forEach((image) => {
        const img = new Image();
        img.src = image;
      });
    };

    preloadImages(slideImages);
    preloadImages(horizSlideImages);
  }, []);

  const responsive = {
    superLargeDesktop: {
      breakpoint: { max: 4000, min: 3000 },
      items: 1
    },
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 1
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 1
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1
    }
  };

  const personalPage = classNames(styles.personalbody, 'interestsblog');

  return (
    <div>
        <Topnav />
        <Bottomnav />
        <Mobilenav />
        <div className={personalPage}>
            <h1><span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>What makes [me] me.</span></h1><br /><br /><br />
            <span style={{ color: 'rgba(255, 255, 255, 0.65)' }}>
              <img className={styles.personalimg} src={Data} alt="Data and its Manipulation" /><br /><br />
              <span style={{ color: '#ffed00' }}>Data and its Manipulation</span><br />
              &nbsp; &nbsp; &nbsp; &nbsp; <i>How can you define life's instances?</i> — How can you formulate extrapolations for these instances?
              — consideration of the most basic forms and analysis of everything. <br />&nbsp; &nbsp; &nbsp; &nbsp; I am interested in the design and application of data structures
              within software engineering. This idea of data collection and grouping in order to solve different issues or provide different services is what drives me within
              the field of computer science and I am interested in learning more about it.
              <br /><br /><br /><br />
              <img className={styles.personalimg} src={Design} alt="Design and Implementation" /><br /><br />
              <span style={{ color: '#ffed00' }}>Design and Implementation</span><br />
              &nbsp; &nbsp; &nbsp; &nbsp; <i>Minimalistic, yet Complex?</i> — A Living Contradiction; Splitting myself into pages. — these ideas are the inspiration for this site.
              — a wreckage of variables, beauty in simplified layers.<br />&nbsp; &nbsp; &nbsp; &nbsp;  When creating I like to be deliberate about what I do, I want everything to
              have its meaning and purpose (sometimes even multiple). I want to be able to create something that stimulates minds; grabs and guides your attention and getting the user
              to interact and learn more.
              <br /><br /><br /><br />
              <video className={styles.personalvideo} autoPlay muted loop playsInline><source src={Music} type="video/mp4" />
              <script type="application/ld+json">{JSON.stringify(musicVideoData)}</script></video><br /><br />
              <span style={{ color: '#ffed00' }}>Music and the Visual Arts</span><br />
              &nbsp; &nbsp; &nbsp; &nbsp; <i>Create and Consume</i> — A cathartic release of emotion. As humans we are led to consume that which targets our senses and emotions.
              Since these forms of media are the most accessible, they are also the most powerful. <br />&nbsp; &nbsp; &nbsp; &nbsp; Growing up I was always fascinated by the idea
              of creating something. I wanted to be able to look at something I made and feel that feeling of satisfaction. I taught myself how to produce music, mix and master, and
              play guitar my freshman year of high school and have been learning ever since. I believe that these skills and mindsets enable me to be a better developer/designer as
              I have an intrinsic motivation to learn how to create and apply my skills more cohesively and effectively in the realms of software engineering and development.
              <br /><br /><br /><br />
              <video className={styles.personalvideo} autoPlay muted loop playsInline><source src={Photocomp} type="video/mp4" />
              <script type="application/ld+json">{JSON.stringify(personalityVideoData)}</script></video><br /><br />
              <span style={{ color: '#ffed00' }}>Personality and Drive</span><br />
              &nbsp; &nbsp; &nbsp; &nbsp; <i>Driven, Easy-Going, Eager to Do Things</i> — It's always hard to tell a person's true personality through only words on a screen.
              Visuals tend to speak louder to me.<br />&nbsp; &nbsp; &nbsp; &nbsp; People who meet me, know that I am easy to get to know; I find it easy to relate to and understand people and
              speak about different topics and interests. Being passionate about a variety of things allows me to gauge the interests of others and find common ground; grouping together
              multiple differing personalities and interests together to create a cohesive environment. I am able to view things from different perspectives and understand how to reach
              different audiences from a development standpoint. I think maintaining good social interactions with the people around me truly allows me to learn so much more from them and
              further myself as a person and in my career. Feel free to reach out, get to know me, and see how I could slot in with your team and vision.
              <br /><br /><br /><br />
              <div style={{ display: 'flex', justifyContent: 'center', gap: '20px' }}>
                <div style={{ width: '50%' }}>
                  <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={10000} transitionDuration={500}>
                    {slideImages.map((slideImage, index) => (
                      <div key={index}>
                        <img src={slideImage} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                      </div>
                    ))}
                  </Carousel>
                </div>
                <div style={{ width: '50%', marginTop: '14.525%' }}>
                  <Carousel responsive={responsive} infinite={true} autoPlay={true} autoPlaySpeed={10000} transitionDuration={500}>
                    {horizSlideImages.map((slideImage, index) => (
                      <div key={index}>
                        <img src={slideImage} alt={`Slide ${index + 1}`} style={{ width: '100%', height: 'auto' }} />
                      </div>
                    ))}
                  </Carousel>
                </div>
              </div><br /><br />
              <span style={{ color: '#ffed00' }}>Photography</span><br />
              &nbsp; &nbsp; &nbsp; &nbsp; <i>Sample of Some Pictures I Have Taken</i>
              <br /><br /><br /><br />
            </span>
            <br /><br /><br /><br /><br /><br />
        </div>
    </div>
  );
}

export default Personal;