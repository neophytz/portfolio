import React from 'react'

export const Hero = () => {
  const designation = "Designer";
 
  return (
    <section id="hero" className="d-flex flex-column justify-content-center">
    <div className="container" data-aos="zoom-in" data-aos-delay="100">
      <h1>Brandon Johnson</h1>
      <p>I'm {designation}</p>
      <div className="social-links">
        <a href="#!" className="twitter"><i className="fa-brands fa-twitter"></i></a>
        <a href="#!" className="facebook"><i className="fa-brands fa-facebook"></i></a>
        <a href="#!" className="instagram"><i className="fa-brands fa-instagram"></i></a>
        <a href="#!" className="google-plus"><i className="fa-brands fa-skype"></i></a>
        <a href="#!" className="linkedin"><i className="fa-brands fa-linkedin"></i></a>
      </div>
    </div>
  </section>
  )
}
