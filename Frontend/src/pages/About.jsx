import React from 'react'
import AboutHero from '../components/AboutHero'
import Footer from '../components/Footer'
import More from '../components/More'
import Navbar from '../components/Navbar'

const About = () => {
  return (
    <>
        <Navbar/>
        <AboutHero/>
        <More/>
        <Footer/>
    </>
  )
}

export default About