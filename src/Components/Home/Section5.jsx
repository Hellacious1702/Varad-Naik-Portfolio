import React from 'react'
import './Home.css'

import showcaseImage from './Assets/Images/Section5-Image.png'

const Section5 = () => {
  return (
    <div>
        <div className="Section5-Wrapper">
            <div className="Section5-Header">
                <div className="Section5-Header-Title">
                    <h1>ShouldYou</h1>
                    <p>a basic game answering yes or no</p>
                </div>
                <div className="Section5-Header-Decription">
                    <p>This is a Basic React Project Game. This Projects just Gives you random yes or no answers to your question.</p>
                </div>
                <div className="Section5-Header-Button">
                    <button>→</button>
                </div>
            </div>
            <div className="Section5-Image">
                <img src={showcaseImage}/>
            </div>
        </div>
    </div>
  )
}

export default Section5