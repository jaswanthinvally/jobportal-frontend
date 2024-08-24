import React from 'react'
import { useState } from 'react'
import './components.css'

const Hero = () => {

  const[search,setsearch] = useState("")
  return (
    <div className='flex flex-col'>
    <div className='flex flex-col text-white justify-center w-full my-4'>
      <h1 className='text-center font-semibold text-3xl font-poppins mb-1'>Discover your next opportunity</h1>
      <h2 className='text-center font-poppins text-2xl font-medium'>Job hunting made easy</h2>
    </div>
      <div className='flex justify-center my-4'>
        <div className='h-[120px] w-[520px] bg-green-500 rounded-md flex items-center justify-center'>
          <div className='flex justify-center items-center space-x-2'>
            <input
              placeholder='search for jobs, internships, training ....'
              className='px-4 py-2 rounded-md'
              
            />
            <button 
            className='px-4 py-2 bg-white text-green-500 rounded-md'
            >Search</button>
          </div>
        </div>


      </div>
    </div>
  )
}

export default Hero