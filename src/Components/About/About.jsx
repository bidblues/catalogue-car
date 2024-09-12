import React from 'react'
import './About.css'
import about from '../../assets/about-img.webp'

const About = () => {
  return (
    <div className='about-container'>
        
        <div className='container-image'>
          <img src={about} alt="Logo" className='about-image'/>
        </div>
        
        <div className='container-text'>
          
          <h1>About</h1>
          
          
            <p>Founded in 2008, Prime Motors began with a vision to create a dealership where customer satisfaction is the top priority. Over the years, we have grown and evolved, but our core values remain the same. Our team of experienced professionals is passionate about cars and dedicated to helping you find the right vehicle for your needs.</p>
          
        </div>

      
    </div>
  )
}

export default About