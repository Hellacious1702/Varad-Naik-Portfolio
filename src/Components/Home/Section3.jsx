import React from 'react'
import './Home.css'

import abstractIcon from './Assets/Icons/Section3-Icon.png'

const Section3 = () => {
  return (
    <div>
        <div className="Section3-Wrapper">
            <div className="Section3-Left">
                <img src={abstractIcon} />
                <h1>Based in <br /> Navi Mumbai, <br />Maharashtra <br /> <span>410210</span></h1>
            </div>
            <div className="Section3-Right">
                <h1>I am a self-taught front-end web developer with 10+ projects under my belt. I specialize in HTML, CSS, and JavaScript, and <span> I am always looking for new and innovative ways to use these technologies to create amazing user experiences.</span></h1>
            </div>
        </div>
    </div>
  )
}

export default Section3