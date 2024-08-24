import React from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import TopRole from './components/TopRole'

const App = () => {
  return (
    <div className=' px-8 bg-black '>
      <div>
      <Navbar/>
      </div>
      <div>
        <Hero/>
        <TopRole/>
      </div>
    </div>
  )
}

export default App