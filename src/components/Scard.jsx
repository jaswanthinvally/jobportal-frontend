import React from 'react'

const Scard = ({ name, role, logo, salary }) => {
    return (
        <div className=' text-white bg-green-500 m-2 rounded p-5 font-poppins font-medium h-60 w-60 flex justify-center flex-col'>
            <div className='text-black font-bold text-2xl'>{name}</div>
            <div>{role}</div>
            <div>{logo}</div>
            <div>{salary}</div>
            <button className='bg-black p-1 rounded-md px-2 hover mt-3'>apply</button>
        </div>
    )
}

export default Scard