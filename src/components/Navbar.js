import React from 'react'

const Navbar = () => {
  return (
    <header id="header" className="d-flex flex-column justify-content-center">
      <nav id="navbar" className="navbar nav-menu">
        <ul>
          <li><a href="#hero" className="nav-link scrollto active"> <i className="fa-solid fa-house-user"/><span>Home</span></a></li>
          <li><a href="#about" className="nav-link scrollto"> <i className="fa-solid fa-address-card"/><span>About</span></a></li>
          <li><a href="#services" className="nav-link scrollto"> <i className="fa-solid fa-code"/><span>Skills</span></a></li>
          <li><a href="#portfolio" className="nav-link scrollto"><i className="fa-solid fa-file"/><span>Project</span></a></li>
          <li><a href="#resume" className="nav-link scrollto"> <i className="fa-solid fa-file"/><span>Resume</span></a></li>
          <li><a href="#contact" className="nav-link scrollto"> <i className="fa-solid fa-phone"/><span>Contact</span></a></li>
        </ul>
      </nav>
    </header>
)
}

export default Navbar