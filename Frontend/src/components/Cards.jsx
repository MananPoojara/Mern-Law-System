import React from 'react'
import { Link } from 'react-router-dom'
import Single from '../image/law5.jpg'
import Double from '../image/law6.jpg'
import Triple from '../image/law8.jpg'

const Cards = () => {
  return (
    <>
        <div className='w-full -mt-24 py-[10rem] px-2 bg-white text-white'>
            <div className=' max-w-[1240px] mx-auto grid md:grid-cols-3 gap-8'>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' style={{backgroundImage: `url(${Double})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                    <h2 className='text-2xl font-bold text-center py-8'>About Me</h2>
                    <p className='text-center text-4xl font-bold'>Justice Craft</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Providing Free Learning From Best Lawyers In The World</p>
                        <p className='py-2 mx-8'></p>
                    </div>
                    <Link to='/about' className='bg-orange-500 w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Go To About Me</Link>
                </div>
                <div className='w-full shadow-xl bg-gray-100 flex flex-col p-4 md:my-0 my-8 rounded-lg hover:scale-105 duration-300' style={{backgroundImage: `url(${Single})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                    <h2 className='text-2xl font-bold text-center py-8'>Service</h2>
                    <p className='text-center text-4xl font-bold'>Easy To Learn</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Just Search IPC Section</p>
                        <p className='py-2 border-b mx-8'>And All Things You Need Will Be Provided</p>
                        <p className='py-2 border-b mx-8'>Just Search And Learn</p>
                    </div>
                    <Link to='/service' className='bg-white text-black w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Go To Service</Link>
                </div>
                <div className='w-full shadow-xl flex flex-col p-4 my-4 rounded-lg hover:scale-105 duration-300' style={{backgroundImage: `url(${Triple})`,backgroundSize: 'cover',backgroundPosition: 'center',}}>
                    <h2 className='text-2xl font-bold text-center py-8'>Practie Area</h2>
                    <p className='text-center text-4xl font-bold'>Learn From World</p>
                    <div className='text-center font-medium'>
                        <p className='py-2 border-b mx-8 mt-8'>Providing Real World Case Study</p>
                        <p className='py-2 mx-8'></p>
                    </div>
                    <Link to='/practice' className='bg-green-500 text-white w-[200px] rounded-md font-medium my-6 mx-auto px-6 py-3'>Go To Practice</Link>
                </div>
            </div>
        </div>
    </>
  )
}

export default Cards