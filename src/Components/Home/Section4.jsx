import React from 'react'
import './Home.css'

import showcaseImage from './Assets/Images/Section4-Image.png'

const Section4 = () => {
  return (
    <div>
        <div className="Section4-Wrapper">
            <div className="Section4-Header">
                <div className="Section4-Header-Title">
                    <h1>QRhungry</h1>
                    <p>QR code generator react app</p>
                </div>
                <div className="Section4-Header-Decription">
                    <p>QRhungry is your one-stop shop for creating QR codes that are as unique and flavorful as you are. </p>
                </div>
                <div className="Section4-Header-Button">
                    <button>→</button>
                </div>
            </div>
            <div className="Section4-Image">
                <img src={showcaseImage}/>
            </div>
        </div>
    </div>
  )
}

export default Section4