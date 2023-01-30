import React from 'react'

const About = () => {
  return (
    <div className='about' data-aos="zoom-in">
      <h1>About Us</h1>
      <div className='about-main' data-aos="slide-up">
      <div className='linkedin'>
      <i class="fa-brands fa-linkedin"></i>
      <a href={"https://www.linkedin.com/in/pallabi-ram-1234871a4/"} target={""}><button>LinkedIn</button></a>
      </div>
      <div className='github'>
      <i class="fa-brands fa-github"></i>
      <a href={"https://github.com/pallabiram"} target={""}><button>GitHub</button></a>
      </div>
      <div className='insta'>
      <i class="fa-brands fa-instagram"></i>
      <a href={"https://instagram.com/pallavi8628"} target={""}><button>Instagram</button></a>
      </div>
      </div>
    </div>
  )
}

export default About