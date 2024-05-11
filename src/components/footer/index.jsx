import React from 'react'

const Footer = () => {
  return (
    <main className='bg-primary py-8'>
        <div id="footer" className='flex flex-col justify-center items-center text-center'>
            <h1 className='font-body text-purple-600 font-medium text-3xl'>Aamir Almani</h1>
            <div id="list" className="flex text-white gap-5 md:gap-14 my-7">
                <a href="#about" className='font-body md:text-xl hover:text-purple-500'>About</a>
                <a href="#skill" className='font-body md:text-xl hover:text-purple-500'>Skills</a>
                <a href="#project" className='font-body md:text-xl hover:text-purple-500'>Projects</a>
                <a href="#contact" className='font-body md:text-xl hover:text-purple-500'>Contact ME 🚀</a>
            </div>
            <div id="list" className="flex text-white gap-10 my-2">
                <a href="https://www.facebook.com/aamir.almani.65" target='_blank' className='font-body text-xl hover:text-blue-500 fa fa-facebook-square'></a>
                <a href="https://twitter.com/aamir_almani65" target='_blank' className='font-body text-xl hover:text-blue-400 fa fa-twitter'></a>
                <a href="https://github.com/aamirali65" target='_blank' className='font-body text-xl hover:text-gray-600 fa fa-github'></a>
                <a href="https://www.linkedin.com/in/aamirali65/" target='_blank' className='font-body text-xl hover:text-blue-500 fa fa-linkedin-square'></a>
                <a href="https://www.instagram.com/aamir._.65/" target='_blank' className='font-body text-xl hover:text-pink-500 fa fa-instagram'></a>
            </div>
            <span className='text-white mt-10 font-body md:px-0 px-2'>© 2024 Aamir Almani. All rights reserved.</span>
        </div>
    </main>
  )
}

export default Footer