import React from 'react'
import Footer from '../components/Footer'
import Navbar from '../components/Navbar'
import ContactContent from '../components/ContactContent'
import ContactHero from '../components/ContectHero'


const Contact = () => {
  return (
    <>
        <Navbar/>
        <ContactHero/>
        <ContactContent/>
        <Footer/>
    </>
  )
}

export default Contact