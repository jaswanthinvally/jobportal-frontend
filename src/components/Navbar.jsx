import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div className='text-white'>
            <nav className='flex justify-between py-2'>
                <div className=''>
                <h1 className=' font-bold text-3xl font-poppins '>place <span className='text-green-500'>me</span></h1>
                </div>
                <div className='flex '>
                    <li className='list-none px-4 text-lg font-bold font-poppins'>Jobs</li>
                    <li className='list-none px-4 text-lg font-bold font-poppins'>Home</li>
                    <li className='list-none px-4 text-lg font-bold font-poppins'>Internship</li>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar