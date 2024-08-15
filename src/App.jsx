import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'

const App = () => {
  return (
    <div className=' px-8 '>
      <div>
      <Navbar/>
      </div>
      <div>
        <Hero/>
      </div>
    </div>
  )
}

export default App