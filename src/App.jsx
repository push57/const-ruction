import React from 'react'
import Header from './sections/Header'
import Hero from './sections/Hero'
import About from './sections/About'
import Services from './sections/Services'
import Portfolio from './sections/Portfolio'
import Working from './sections/Working'
import Testmonial from './sections/Testmonial'
import Contact from './sections/Contact'
import Footer from './sections/Footer'


const App = () => {
  return (
    <>
    <Header/>
    <Hero />
    <About />
    <Services />
    <Portfolio />
    <Working/>
    <Testmonial />
    <Contact />
    <Footer />
    </>
  )
}

export default App