import React from 'react'

import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';
import InfoIcon from '@material-ui/icons/Info';

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

import Tilt from 'react-parallax-tilt'


function Home() {

  return (
    <div className="page-container" >

      <Header />

      <hr />

      <div className="page-body">
        <h2>Web Design + Development</h2>

        <section>
          <h3>Grow Tools</h3>

          <p><a href="http://www.growtools.io" target="_blank" rel="noopener noreferrer" aria-label="grow tools">Grow tools</a> is a web app that hosts a collection of tools to aid growers in getting their work done more efficiently. I intend to add login/profile functionality to allow users to create calendars that can be used to plan and manage the various stages of a grow.</p>

          <div className="button-bar">
            <Button
              variant="outlined"
              color="primary"
              style={{ textAlign: 'center', fontFamily: 'Montserrat', margin: '5px' }}
              startIcon={<GitHubIcon />}
              href="https://github.com/jfaro/grow-tools"
              target="_blank"
              aria-label="growtools github repository">
              GitHub Repository
              </Button>
          </div>

          <div className="gallery-image-container">
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={growtools_illustrator} alt="grow tools illustrator project" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={growtools_landing} alt="grow tools landing page" />
            </Tilt>
          </div>
        </section>

        <section>
          <h3>Storoc</h3>

          <p>During the 2020 Sp/Su term at UM, a special version of <a href="https://atlas.ai.umich.edu/course/EECS%20495/" target="_blank" rel="noopener noreferrer" aria-label="EECS 495 information">EECS 495: Software Development for Accessibility</a> was offered where students were tasked with designing and developing solutions to problems created by the COVID-19 pandemic. My group created a live occupancy monitoring system for businesses, using object detection algorithms that ran on a Raspberry Pi. My role within the group was to design and build the front end.</p>
InfoIcon
          <div className="button-bar">
            <Button
              variant="outlined"
              color="secondary"
              style={{ textAlign: 'center', fontFamily: 'Montserrat', margin: '5px' }}
              href="https://news.umich.edu/engineering-course-challenges-students-to-create-tech-solutions-for-covid-19/"
              target="_blank"
              aria-label="article about EECS 495"
            >More Information
          </Button>

            <Button
              variant="outlined"
              color="primary"
              style={{ textAlign: 'center', fontFamily: 'Montserrat', margin: '5px' }}
              startIcon={<GitHubIcon />}
              href="https://github.com/storoc/storoc_ui"
              target="_blank"
              aria-label="storoc github repository"
            >GitHub Repository
          </Button>
          </div>

          <div className="gallery-image-container">
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={storoc_landing} alt="Storoc landing page" />
            </Tilt>
          </div>

        </section>


        <hr />

        <h2>Drawing + Painting</h2>

        <section>
          <div className="gallery-image-container">
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_6} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_5} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_7} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_8} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_3} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_4} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_1} alt="drawing gallery" />
            </Tilt>
            <Tilt
              tiltMaxAngleX='20'
              tiltMaxAngleY='20'
              transitionSpeed='2000'>
              <img className="gallery-image" src={sketch_2} alt="drawing gallery" />
            </Tilt>
          </div>
        </section>
      </div>
    </div >
  );
}

export default Home;
