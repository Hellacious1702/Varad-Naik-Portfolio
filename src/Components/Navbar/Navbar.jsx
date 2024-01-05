import React, { useState } from 'react'
import './Navbar.css'

import MenuButton from './Assets/Icons/menu.png'
import CloseButton from './Assets/Icons/close.png'



const Navbar = () => {

  const [mobileNav , setMobileNav] = useState("Mobile-Nav-notActive");

  return (
    <div>
        <div className="Nav-Menus-Mobile" id={mobileNav}>
          <div className="Nav-Mobile-Menu-Wrapper">
            <a href="">home.</a>
            <a href="">work.</a>
            <a href="">contact.</a>
          </div>
          <div className="Nav-Mobile-Menu-Button">
            <button onClick={() => {setMobileNav("Mobile-Nav-notActive")}}><img src={CloseButton}/></button>
          </div>   
        </div>
        <div className="Nav-Wrapper">
            <div className="Nav-Brand">
                <p>varad naik.</p>
            </div>
            <div className="Nav-Menus-Wrapper">
                <a href="">home.</a>
                <a href="">work.</a>
                <a href="">contact.</a>
            </div>
            <div className="Nav-Menu-Wrapper-Mobile">
              <button onClick={() => {setMobileNav("Mobile-Nav-Active")}}><img src={MenuButton}/></button>
            </div>
        </div>
    </div>
  )
}

export default Navbar