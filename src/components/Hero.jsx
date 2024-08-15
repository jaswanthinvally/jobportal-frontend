import React from 'react'
import { useState } from 'react'
import './components.css'

const Hero = () => {

  const[search,setsearch] = useState("")
  return (
    <div className=''>
      <div className='flex justify-center'>
        <div className='h-[120px] w-[520px] bg-orange-600 rounded-md flex items-center justify-center'>
          <div className='flex justify-center items-center space-x-2'>
            <input
              placeholder='search for jobs, internships, training ....'
              className='px-4 py-2 rounded-md'
              
            />
            <button 
            className='px-4 py-2 bg-white text-orange-600 rounded-md'
            >Search</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero