import React from 'react'
import vd2 from '../image/bbc.mp4'

const ServiceHero = () => {
  return (
    <>
    <div className='text-gradient bg-gradient-to-r uppercase from-orange-500 via-white to-green-500 bg-clip-text text-transparent text-xl'>
        <video autoPlay muted loop loading="lazy" className='-z-50 sm:block absolute inset-0 w-full h-full object-cover blur-xs brightness-75 blur-sm'>
            <source src={vd2} type="video/mp4" />
        </video>
      <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center'>
        <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent font-bold p-2'>
        Demystifying IPC: Understanding Indian Penal Code Sections
        </p>
        <h1 className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
        Explore IPC Section Descriptions.
        </h1>
        <div className='flex justify-center items-center'>
          <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-4xl sm:text-3xl text-xl -mt-4 font-bold py-4'>Understanding IPC Sections.</p>
        </div>
        <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-2xl text-xl font-bold text-gray-500'>Providing Expert Legal Guidance and Assistance.</p>
      </div>
    </div>
    </>
    
  )
}

export default ServiceHero