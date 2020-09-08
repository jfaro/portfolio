import React from 'react'
import './Home.css'

import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

import Header from '../components/Header'

// Images
import growtools_illustrator from '../assets/images/growtools_illustrator.png'
import growtools_landing from '../assets/images/growtools_landing.png'
import storoc_landing from '../assets/images/storoc_landing.png'
import sketch_1 from '../assets/images/drawings/sketch_1.png'
import sketch_2 from '../assets/images/drawings/sketch_2.png'
import sketch_3 from '../assets/images/drawings/sketch_3.png'
import sketch_4 from '../assets/images/drawings/sketch_4.png'
import sketch_5 from '../assets/images/drawings/sketch_5.png'
import sketch_6 from '../assets/images/drawings/sketch_6.png'
import sketch_7 from '../assets/images/drawings/sketch_7.png'
import sketch_8 from '../assets/images/drawings/sketch_8.png'

// Animations
import Tilt from 'react-parallax-tilt'
import { Spring } from "react-spring/renderprops";
import VisibilitySensor from "react-visibility-sensor";


class Home extends React.Component {

  render() {

    return (

      <div className="home" >
        <Header />
        <p>VOID design application (TESTING) </p>

        <hr />

        <div className="page-body">

          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) =>
                  <h2 style={{ opacity }}>Web Design + Development</h2>
                }
              </Spring>
            )}
          </VisibilitySensor>

          <section>
            <h3>growtools.io</h3>
            <p>
              <a href="http://www.growtools.io" target="_blank" rel="noopener noreferrer" aria-label="grow tools">Grow tools</a> is a web app I have been working on that hosts a collection of tools to aid growers in getting their work done more efficiently. Honestly, the site is pretty useless. I have mostly been building it to familiarize myself with <a href="https://reactjs.org/" target="_blank" rel="noopener noreferrer" aria-label="React.js homepage">React</a> and because designing icons is fun. I intend to add a back-end to handle authentication so that users can create profiles. After adding user profiles, I would like to build a calendar feature that that would allow growers to log their processes to share with others.
              </p>

            <div className="button-bar">
              <Button
                variant="outlined"
                color="primary"
                style={{ textAlign: 'center', fontFamily: 'Montserrat' }}
                startIcon={<GitHubIcon />}
                href="https://github.com/jfaro/grow-tools"
                target="_blank"
                aria-label="growtools github repository"
              >GitHub Repository
          </Button>
            </div>


            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'
            >
              <img src={growtools_illustrator} alt="grow tools illustrator project" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'
            >
              <img src={growtools_landing} alt="grow tools landing page" />
            </Tilt>
          </section>

          <section>
            <h3>Storoc</h3>
            <p>
              During the Sp/Su 2020 term, a special version of <a href="https://atlas.ai.umich.edu/course/EECS%20495/" target="_blank" rel="noopener noreferrer" aria-label="EECS 495 information">EECS 495: Software Development for Accessibility</a> was offered (at U of M) where students were tasked with designing and developing solutions to problems created by the COVID-19 pandemic. My group created a live occupancy monitoring system for businesses, using object detection algorithms that ran on a Raspberry Pi. My role within the group was to design and build the front-end web application.
          </p>
            <div className="button-bar">
              <Button
                variant="outlined"
                color="secondary"
                style={{ textAlign: 'center', fontFamily: 'Montserrat' }}
                href="https://news.umich.edu/engineering-course-challenges-students-to-create-tech-solutions-for-covid-19/"
                target="_blank"
                aria-label="article about EECS 495"
              >More Information
          </Button>

              <div style={{ width: '10px' }} />

              <Button
                variant="outlined"
                color="primary"
                style={{ textAlign: 'center', fontFamily: 'Montserrat' }}
                startIcon={<GitHubIcon />}
                href="https://github.com/storoc/storoc_ui"
                target="_blank"
                aria-label="storoc github repository"
              >GitHub Repository
          </Button>
            </div>

            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'
            >
              <img src={storoc_landing} alt="Storoc landing page" />
            </Tilt>
          </section>


          <hr />
          <VisibilitySensor once>
            {({ isVisible }) => (
              <Spring delay={300} to={{ opacity: isVisible ? 1 : 0 }}>
                {({ opacity }) =>
                  <h2 style={{ opacity }}>Drawing</h2>
                }
              </Spring>
            )}
          </VisibilitySensor>
          <div className="grid-container">

            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_6} alt="drawing gallery" />
              </Tilt>
            </div>
            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_5} alt="drawing gallery" />
              </Tilt>
            </div>

            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_7} alt="drawing gallery" />
              </Tilt>

            </div>
            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_8} alt="drawing gallery" />
              </Tilt>

            </div>

            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_3} alt="drawing gallery" />
              </Tilt>

            </div>
            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_4} alt="drawing gallery" />
              </Tilt>

            </div>

            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_1} alt="drawing gallery" />
              </Tilt>

            </div>
            <div className="gallery-image-container">
              <Tilt
                tiltMaxAngleX='20'
                tiltMaxAngleY='20'
                transitionSpeed='2000'
              >
                <img className="gallery-image" src={sketch_2} alt="drawing gallery" />
              </Tilt>

            </div>





          </div>
        </div>
      </div >
    );

  }

}

export default Home;
