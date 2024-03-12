import React from 'react'
import { Outlet } from 'react-router-dom'
import { Link } from 'react-router-dom'


const About = () => {
  return (
    <div>
      <Outlet/>
        <section className="about-us">
      <div className="about">
        <div className="text">
          <h2>About Us</h2>
          <h5>Front-end Developer & <span>Designer</span></h5>
          <p>
          Hey there! 🌟 Looking to expand your network and connect with like-minded individuals? Look no further! Join me on my journey as a passionate front-end developer and designer. Let's collaborate, share ideas, and create something amazing together! 🚀 Don't miss out, connect with me now! 💬
          </p>
          <div className="data">
            <Link to="/about/profile" className="hire">Connect with me</Link>
          </div>
        </div>
      </div>
    </section>

    </div>
  )
}

export default About
