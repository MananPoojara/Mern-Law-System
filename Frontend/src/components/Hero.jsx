import React from 'react';
import vd from '../image/law2.mp4';
import Analytics from './Analytics';
import Cards from './Cards';

const Hero = () => {
  const handleScroll = () => {
    const element = document.getElementById('target-element'); // Replace 'target-element' with the ID of the element you want to scroll to
    element.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <>
      <div className='text-gradient bg-gradient-to-r uppercase from-orange-500 via-white to-green-500 bg-clip-text text-transparent text-xl'>
        <video autoPlay muted loop loading="lazy" className='-z-50 sm:block absolute inset-0 w-full h-full object-cover blur-xs brightness-75'>
          <source src={vd} type="video/mp4" />
        </video>
        <div className='max-w-[800px] mt-[-96px] w-full h-screen mx-auto text-center flex flex-col justify-center animate-slidein300'>
          <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent font-bold p-2'>
            Justice is the cornerstone of a fair society, and law is its instrument.
          </p>
          <h1 className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-7xl sm:text-6xl text-4xl font-bold md:py-6'>
            Justice for All.
          </h1>
          <div className='flex justify-center items-center animate-slidein300'>
            <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-4xl sm:text-3xl text-xl -mt-4 font-bold py-4'>Where there is law, there is justice.</p>
          </div>
          <p className='animate-text bg-gradient-to-r from-orange-500 via-white to-green-500 bg-clip-text text-transparent md:text-2xl text-xl font-bold text-gray-500'>In law, every word counts, and every count holds weight.</p>
          <button className='bg-gradient-to-r from-green-400 via-white to-orange-500 w-[200px] transition duration-500 ease-in-out rounded-md font-medium my-6 mx-auto py-3 text-blue-800 hover:-translate-y-2 hover:ease-in-out hover:scale-80 hover:from-orange-500 hover:via-white hover:to-green-500' onClick={handleScroll}>Get Started</button>
        </div>
      </div>
      <div id="target-element"> 
      </div>
    </>
  );
};

export default Hero;
