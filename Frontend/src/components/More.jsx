import React from 'react'
import amit from '../image/amit.png'
import yogi from '../image/yogi.png'
import modi2 from '../image/modi2.png'



const More = () => {
  return (
    <>
        <section class="w-full bg-white pt-7 pb-7 md:pt-20 md:pb-24">
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto leading-6 text-black border-0 border-gray-300 border-solid md:flex-row max-w-7xl lg:px-16 mb-20">

                <div class="box-border relative w-full max-w-md px-4 mt-5 mb-4 -ml-5 text-center bg-no-repeat bg-contain border-solid md:ml-0 md:mt-0 md:max-w-none lg:mb-0 md:w-1/2 xl:pl-10">
                    <img src={yogi} class="p-7 pl-2 pr-2 xl:pl-16 xl:pr-20 "/>
                </div>

                <div class="box-border order-first w-full text-black border-solid md:w-1/2 md:pl-10 md:order-none">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Our Mission
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-12 xl:pr-32 lg:text-lg">
                      At JusticeCraft, we are dedicated to upholding justice, integrity, and fairness in all legal matters. 
                    </p>
                    <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Protecting Rights
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Community Engagement
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Learn the top techniques
                        </li>
                    </ul>
                </div>
            </div>
            <div class="box-border flex flex-col items-center content-center px-8 mx-auto mt-2 leading-6 text-black border-0 border-gray-300 border-solid md:mt-20 xl:mt-0 md:flex-row max-w-7xl lg:px-16">

                <div class="box-border w-full text-black border-solid md:w-1/2 md:pl-6 xl:pl-32">
                    <h2 class="m-0 text-xl font-semibold leading-tight border-0 border-gray-300 lg:text-3xl md:text-2xl">
                      Our Values
                    </h2>
                    <p class="pt-4 pb-8 m-0 leading-7 text-gray-700 border-0 border-gray-300 sm:pr-10 lg:text-lg">
                      Our team of experienced attorneys and legal professionals are committed to providing comprehensive legal services to our clients, ensuring their rights are protected and their interests are represented with the highest level of competence and dedication.
                    </p>
                    <ul class="p-0 m-0 leading-6 border-0 border-gray-300">
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Integrity
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Excellence
                        </li>
                        <li class="box-border relative py-1 pl-0 text-left text-black border-solid">
                            <span class="inline-flex items-center justify-center w-6 h-6 mr-2 text-white bg-orange-500 rounded-full"><span class="text-sm font-bold">✓</span></span> Client-Centric Approach
                        </li>
                    </ul>
                </div>

                <div class="box-border relative w-full max-w-md px-4 mt-10 mb-4 text-center bg-no-repeat bg-contain border-solid md:mt-0 md:max-w-none lg:mb-0 md:w-1/2">
                    <img src={amit} class="pl-4 sm:pr-10 xl:pl-10 lg:pr-32"/>
                </div>
            </div>
        </section>
<section class="py-20 bg-gray-50">
  <div class="container items-center max-w-6xl px-10 mx-auto sm:px-20 md:px-32 lg:px-16">
    <div class="flex flex-wrap items-center -mx-3">
      <div class="order-1 w-full px-3 lg:w-1/2 lg:order-0">
        <div class="w-full lg:max-w-md">
          <h2 class="mb-4 text-3xl font-bold leading-tight tracking-tight sm:text-4xl font-heading">Unlocking IPC Section Meanings</h2>
          <p class="mb-4 font-medium tracking-tight text-black xl:mb-6">At <span className='underline hover:bg-yellow-200'>JusticeCraft</span>, we specialize in deciphering the complexities of the Indian Penal Code (IPC) and providing expert legal guidance to our clients. </p>
          <ul>
            <li class="flex items-center py-2 space-x-4 xl:py-3">
              <svg class="w-8 h-8 text-orange-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 3v2m6-2v2M9 19v2m6-2v2M5 9H3m2 6H3m18-6h-2m2 6h-2M7 19h10a2 2 0 002-2V7a2 2 0 00-2-2H7a2 2 0 00-2 2v10a2 2 0 002 2zM9 9h6v6H9V9z"></path></svg>
              <span class="font-medium text-black">Comprehensive Legal Assistance</span>
            </li>
            <li class="flex items-center py-2 space-x-4 xl:py-3">
              <svg class="w-8 h-8 text-blue-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M20 7l-8-4-8 4m16 0l-8 4m8-4v10l-8 4m0-10L4 7m8 4v10M4 7v10l8 4"></path></svg>
              <span class="font-medium text-black">IPC Section Interpretation</span>
            </li>
            <li class="flex items-center py-2 space-x-4 xl:py-3">
              <svg class="w-8 h-8 text-green-500" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M9 12l2 2 4-4m5.618-4.016A11.955 11.955 0 0112 2.944a11.955 11.955 0 01-8.618 3.04A12.02 12.02 0 003 9c0 5.591 3.824 10.29 9 11.622 5.176-1.332 9-6.03 9-11.622 0-1.042-.133-2.052-.382-3.016z"></path></svg>
              <span class="font-medium text-black">IPC Section Interpretation</span>
            </li>
          </ul>
        </div>
      </div>
      <div class="w-full px-3 mb-12 lg:w-1/2 order-0 lg:order-1 lg:mb-0"><img class="mx-auto sm:max-w-sm lg:max-w-full" src={modi2} alt="feature image"/></div>
    </div>
  </div>
</section>
    </>
  )
}

export default More