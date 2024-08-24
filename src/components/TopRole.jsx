import React from 'react'
import Scard from './Scard'

const TopRole = () => {
  return (
    <div className='bg-black flex flex-col'>
    <h1 className=' font-poppins text-white ps-1 text-2xl font-medium'>Top Roles</h1>
    <div className='flex pt-4 '>
    <Scard name="TCS" role="master" logo="sample" salary="xxxxx" />
    <Scard name="infosys" role="master" logo="sample" salary="xxxxx" />
    <Scard name="Mind tree" role="master" logo="sample" salary="xxxxx" />
    <Scard name="Ippo pay" role="master" logo="sample" salary="xxxxx" />

    </div>



    </div>
  )
}

export default TopRole