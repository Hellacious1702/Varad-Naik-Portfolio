import React from 'react'
import './Home.css'

import abstractIcon from './Assets/Icons/Section1-Icon.png'
import ProfileImage from './Assets/Images/Section1-Image.jpg'

const Section1 = () => {
  return (
    <div>
        <div className="Section1-Wrapper">
            <div className="Section1-Left">
                <img src={ProfileImage}/>
                <h1>varad naik is a freelance web designer <span>currently learning in india.</span></h1>
            </div>
            <div className="Section1-Right">
                <img src={abstractIcon} />
                <h1>Have a project in mind?</h1>
                <button>varad0007@gmail.com</button>
            </div>
        </div>
    </div>
  )
}

export default Section1