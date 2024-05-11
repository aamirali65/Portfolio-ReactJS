import React from 'react'
import Image from '../../assets/img/profile-pic.png'

const Hero = () => {
  return (
   <main>
    <div id="hero" className='min-h-screen bg-primary'>
      <div className="text-center flex justify-center items-center flex-col py-10 px-5">
        <img src={Image} className='w-52 h-52 object-cover rounded-full mx-auto mb-8 sm:w-64 sm:h-64' alt="" />
        <div id="title" className='w-full max-w-4xl mx-auto'>
          <h1 className='text-white font-body font-semibold text-3xl sm:text-5xl leading-tight mb-4'>I'm Aamir Almani, full stack developer based in Germany.</h1>
        </div>
        <div id="description" className="max-w-xl mx-auto mb-4">
          <span className='text-gray-400 font-body text-base sm:text-lg leading-tight'>I am a full stack developer from Germany with 2 years of experience in multiple programming languages.</span>
        </div>
        <div id="btnx" className='flex flex-col sm:flex-row gap-3 my-2 items-center'>
          <button className='p-3 w-40 bg-purple-600 text-white rounded-full hover:bg-purple-500 transition-all'>
            <a href='https://www.linkedin.com/in/aamirali65/' target='_blank'>Connect with me</a>
          </button>
          <button className='p-3 border w-40 text-purple-600 border-purple-600 rounded-full px-5 hover:bg-purple-600 hover:text-white transition-all mt-2 sm:mt-0'>
            <a href='#'>My Resume</a>
          </button>
        </div>
      </div>
    </div>
   </main>
  )
}

export default Hero
