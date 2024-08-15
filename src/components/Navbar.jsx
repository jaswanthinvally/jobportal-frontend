import React from 'react'

const Navbar = () => {
  return (
    <div>
        <div>
            <nav className='flex justify-between py-2'>
                <div>
                <h1 className=' font-bold text-lg '>place <span className='text-orange-600'>me</span></h1>
                </div>
                <div className='flex '>
                    <li className='list-none px-4 text-lg font-bold'>Jobs</li>
                    <li className='list-none px-4 text-lg font-bold'>Home</li>
                    <li className='list-none px-4 text-lg font-bold'>Internship</li>
                </div>
            </nav>
        </div>
    </div>
  )
}

export default Navbar