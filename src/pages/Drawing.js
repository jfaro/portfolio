import React from 'react'

import sketch_1 from '../assets/images/drawings/sketch_1.png'
import sketch_2 from '../assets/images/drawings/sketch_2.png'
import sketch_3 from '../assets/images/drawings/sketch_3.png'
import sketch_4 from '../assets/images/drawings/sketch_4.png'
import sketch_5 from '../assets/images/drawings/sketch_5.png'
import sketch_6 from '../assets/images/drawings/sketch_6.png'
import sketch_7 from '../assets/images/drawings/sketch_7.png'
import sketch_8 from '../assets/images/drawings/sketch_8.png'

import Tilt from 'react-parallax-tilt'

function Drawing() {
    return (
        <div className="page-body">
            <section>
                <div className="gallery-image-container">
                    <Tilt>
                        <img className="gallery-image" src={sketch_6} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_5} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_7} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_8} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_3} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_4} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_1} alt="drawing gallery" />
                    </Tilt>
                    <Tilt>
                        <img className="gallery-image" src={sketch_2} alt="drawing gallery" />
                    </Tilt>
                </div>
            </section>
        </div>
    )
}

export default Drawing
