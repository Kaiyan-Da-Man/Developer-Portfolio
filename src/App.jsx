import React from 'react'
import Contact from './Components/Contact'
import Footer from './Components/Footer'
import Intro from './Components/Intro'
import Portfolio from './Components/Portfolio'
import Timeline from './Components/Timeline'

function App() {

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
