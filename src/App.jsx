import React from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Portfolio from './Components/Portfolio'
import Timeline from './Components/Timeline'
import DarkMode from 'darkmode-js'

function App() {
  const options = {
    bottom: '64px', // default: '32px'
    right: '32px', // default: '32px'
    left: 'unset', // default: 'unset'
    time: '0.5s', // default: '0.3s'
    mixColor: '#fff', // default: '#fff'
    backgroundColor: '#fff',  // default: '#fff'
    buttonColorDark: '#100f2c',  // default: '#100f2c'
    buttonColorLight: '#fff', // default: '#fff'
    saveInCookies: true, // default: true,
    label: '🌓', // default: ''
    autoMatchOsTheme: true // default: true
  }
  
  const darkmode = new Darkmode(options);
  darkmode.showWidget();
  return (
    <>
      <div className="bg-white text-stone-900 min-h-screen font-inter">
        <div className='max-w-5xl w-11/12 mx-auto'>
          <Intro />
          <Portfolio />
          <Timeline />
          <Contact />
          <Footer />
        </div>
      </div>
    </>
    
  )
}

export default App
