import React from 'react'
import './Home.css'

import Button from '@material-ui/core/Button';
import GitHubIcon from '@material-ui/icons/GitHub';

import Header from '../components/Header'
import Footer from '../components/Footer'

// images
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

class Home extends React.Component {

  render() {

    return (

      <div className="home" >
        <Header />
        <p>portfolio for VOID design application</p>
        <hr />
        <div className="page-body">

          <h2>Web Development</h2>

          <h3>growtools.io</h3>
          <p>
            <a href="http://www.growtools.io">Grow-tools</a> is a web app I have been working on that hosts a collection of tools to help growers get their work done faster. Honestly, the site is pretty useless. I have mostly been building it to familiarize myself with <a href="https://reactjs.org/">React</a> and because designing icons is fun. I intend to add a back-end to handle authentication so that my friends can create profiles. After adding user profiles, I would like to build a calendar feature that that would allow growers to log their processes to share with others.
          </p>
          <Button
            variant="outlined"
            color="primary"
            style={{ alignSelf: 'center', marginBottom: '10px' }}
            startIcon={<GitHubIcon />}
            href="https://github.com/jfaro/grow-tools"
            target="_blank"
            aria-label="growtools github repository"
          >GitHub Repository
          </Button>
          <img src={growtools_illustrator} />
          <img src={growtools_landing} />

          <br />
          <br />
          <h3>STOROC</h3>
          <p>
            During the Sp/Su 2020 term, a special version of EECS 495: Software Development for Accessibility was offered (at U of M) where students were tasked with designing and developing solutions to problems created by the COVID-19 pandemic. My group created a live occupancy monitoring system for businesses, using object detection algorithms that ran on a Raspberry Pi. My role within the group was to design and build the front-end web application.
          </p>
          <div className="button-bar">
            <Button
              variant="outlined"
              color="secondary"
              style={{ alignSelf: 'center', marginBottom: '10px', textAlign: 'center' }}
              href="https://news.umich.edu/engineering-course-challenges-students-to-create-tech-solutions-for-covid-19/"
              target="_blank"
              aria-label="article about EECS 495"
            >More Information
          </Button>

            <div style={{ width: '10px' }} />

            <Button
              variant="outlined"
              color="primary"
              style={{ alignSelf: 'center', marginBottom: '10px', textAlign: 'center' }}
              startIcon={<GitHubIcon />}
              href="https://github.com/storoc/storoc_ui"
              target="_blank"
              aria-label="storoc github repository"
            >GitHub Repository
          </Button>
          </div>

          <img src={storoc_landing} />


          <hr />
          <h2>Drawing</h2>
          <div className="grid-container">

            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_6} />
            </div>
            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_5} />
            </div>

            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_7} />
            </div>
            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_8} />
            </div>

            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_3} />
            </div>
            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_4} />
            </div>

            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_1} />
            </div>
            <div className="gallery-image-container">
              <img className="gallery-image" src={sketch_2} />
            </div>





          </div>
        </div>

        <Footer />
      </div >
    );

  }

}

export default Home;
