import React from 'react'
import modi from '../image/modi.png'
import amit2 from '../image/amitshah.jpg'
import yogi2 from '../image/yogi2.png'


const HomeQuote = () => {
  return (
    <>
<section class="flex items-center justify-center py-20 bg-white min-w-screen">
    <div class="px-16 bg-white">
        <div class="container flex flex-col items-start mx-auto lg:items-center">
            <p class="relative flex items-start justify-start w-full text-lg font-bold tracking-wider text-green-500 uppercase lg:justify-center lg:items-center">Don't just take our word for it</p>


            <h2 class="relative flex items-start justify-start w-full max-w-3xl text-5xl font-bold lg:justify-center text-orange-500">
                <svg xmlns="http://www.w3.org/2000/svg" fill="currentColor" class="absolute right-0 hidden w-12 h-12 -mt-2 -mr-16 text-orange-200 lg:inline-block" viewBox="0 0 975.036 975.036">
                <path d="M925.036 57.197h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.399 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l36 76c11.6 24.399 40.3 35.1 65.1 24.399 66.2-28.6 122.101-64.8 167.7-108.8 55.601-53.7 93.7-114.3 114.3-181.9 20.601-67.6 30.9-159.8 30.9-276.8v-239c0-27.599-22.401-50-50-50zM106.036 913.497c65.4-28.5 121-64.699 166.9-108.6 56.1-53.7 94.4-114.1 115-181.2 20.6-67.1 30.899-159.6 30.899-277.5v-239c0-27.6-22.399-50-50-50h-304c-27.6 0-50 22.4-50 50v304c0 27.601 22.4 50 50 50h145.5c-1.9 79.601-20.4 143.3-55.4 191.2-27.6 37.8-69.4 69.1-125.3 93.8-25.7 11.3-36.8 41.7-24.8 67.101l35.9 75.8c11.601 24.399 40.501 35.2 65.301 24.399z">
                </path>
            </svg>
                See what others are saying</h2>
                <div class="block w-full h-0.5 max-w-lg mt-6 bg-orange-300 rounded-full"></div>

            <div class="items-center justify-center w-full mt-12 mb-4 lg:flex">
                <div class="flex flex-col items-start justify-start w-full h-auto mb-12 lg:w-1/3 lg:mb-0">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-orange-300 rounded-full">
                            <img src={modi} class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-gray-800">Narendra Modi</h4>
                            <p class="text-gray-600">PM of India</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-black">"This is a no-brainer if you want to take your business to the next level. If you are looking for the ultimate toolset, this is it!"</blockquote>
                </div>
                <div class="flex flex-col items-start justify-start w-full h-auto px-0 mx-0 mb-12 border-l border-r border-transparent lg:w-1/3 lg:mb-0 lg:px-8 lg:mx-8 lg:border-gray-200">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src={amit2} class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-gray-800">Amit Shah</h4>
                            <p class="text-gray-600">Home Minister Of India</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-black">"Thanks for creating this service. My life is so much
                        easier.
                        Thanks for making such a great product."</blockquote>
                </div>
                <div class="flex flex-col items-start justify-start w-full h-auto lg:w-1/3">
                    <div class="flex items-center justify-center">
                        <div class="w-16 h-16 mr-4 overflow-hidden bg-gray-200 rounded-full">
                            <img src={yogi2} class="object-cover w-full h-full"/>
                        </div>
                        <div class="flex flex-col items-start justify-center">
                            <h4 class="font-bold text-black">Yogi Adityanath</h4>
                            <p class="text-gray-600">CM Of Uttar Pradesh</p>
                        </div>
                    </div>
                    <blockquote class="mt-8 text-lg text-black">"Packed with awesome content and exactly what I was
                        looking
                        for. I would highly recommend this to anyone."</blockquote>
                </div>
            </div>
        </div>
    </div>
</section>
    </>
  )
}

export default HomeQuote