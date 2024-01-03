import React from 'react'
import './Navbar.css'

const Navbar = () => {
  return (
    <div>
        <div className="Nav-Wrapper">
            <div className="Nav-Brand">
                <p>varad naik.</p>
            </div>
            <div className="Nav-Menus-Wrapper">
                <a href="">home.</a>
                <a href="">work.</a>
                <a href="">contact.</a>
            </div>
        </div>
    </div>
  )
}

export default Navbar