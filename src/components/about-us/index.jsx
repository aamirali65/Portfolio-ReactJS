import React from 'react';
import image from '../../assets/img/bg-img.jpeg'

const About = () => {
  return (
    <main className='bg-primary pb-10' id='about'>
      <div id="title" className='text-center'>
        <h1 className='font-bold text-white font-body text-5xl mb-3'>About Me!</h1>
        <p className='font-body text-gray-500'>Here are some of my skills on which I have been working on for the past 3 years.</p>
      </div>
      <div id="aboutz" className='mx-4 md:mx-10 lg:mx-20 xl:mx-40 flex flex-col gap-10 md:flex-row mt-10 justify-between items-center'>
        <div className="img-div w-full md:w-[500px] h-[300px] md:h-[400px] bg-purple-600 p-1">
          <img src={image} alt="" className='object-cover object-right-top w-full h-full translate-x-3 translate-y-3' />
        </div>
        <div className="w-full lg:w-2/4 text-white mt-5 md:mt-0">
          <h1 className='font-body text-4xl md:text-5xl font-semibold'>I'm Aamir Almani</h1>
          <h1 className='font-body text-medium font-semibold mt-2 md:mt-4 text-lg'>I am a <span className='text-purple-400'>full stack developer</span></h1>
          <h1 className='mt-5'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Vel beatae natus, sit eaque, nisi enim non ipsum cupiditate porro asperiores nihil possimus! Nulla laborum praesentium commodi culpa soluta ipsam quisquam quaerat et nemo, perspiciatis ut, dignissimos nisi expedita hic dolor? Autem est inventore iste nobis, laudantium dolores quasi?</h1>
          <button className='mt-5 p-3 bg-purple-600 rounded-lg hover:bg-purple-500'>
            <a href="#">Download CV <i className='fa fa-download'></i></a>
          </button>
        </div>
      </div>
    </main>
  )
}

export default About;
