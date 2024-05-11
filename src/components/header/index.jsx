import React, { useState } from 'react';
import logo from '../../assets/img/logo.png';

const Header = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  const handleClick = () => {
    setIsNavOpen(!isNavOpen);
  };

  return (
    <nav className="flex p-5 bg-primary justify-between items-center">
      <a href="/#" className='flex gap-2 items-center'>
        <img src={logo} alt="logo" className='w-full h-14'/>
      </a>
      <div id="nav-menu" className={`lg:flex gap-12 px-10 text-white ${isNavOpen ? '' : 'hidden'}`}>
        <a href="#about" className='font-body hover:text-purple-700'>About</a>
        <a href="#skill" className='font-body hover:text-purple-700'>Skills</a>
        <a href="#project" className='font-body hover:text-purple-700'>Projects</a>
        <a href="#contact" className='font-body hover:text-purple-700'>Contact ME 🚀</a>
      </div>
      <button className='p-2 lg:hidden' onClick={handleClick}>
        <i className={`fa ${isNavOpen ? 'fa-close' : 'fa-bars'} text-gray-200`}></i>
      </button>
      <button className='hidden lg:block p-3 bg-purple-600 text-white rounded-3xl px-5 hover:bg-purple-500 transition-all'>
        <a href="https://github.com/aamirali65" target='_blank'>Github Profile</a>
      </button>

      {isNavOpen && (
        <div id='nav-dialog' className="fixed bg-primary inset-0 p-5">
          <div id="nav-bar" className='flex justify-between'>
            <a href="/#" className='flex gap-2 items-center'>
            <img src={logo} alt="logo" className='w-full h-14'/>
            </a>
            <button className='p-2' onClick={handleClick}>
              <i className="fa fa-close text-gray-200"></i>
            </button>
          </div>
          <div className='mt-6 text-white'>
            <a href="#about" className='font-body m-3 p-3 hover:bg-gray-600 block rounded-lg text-white' onClick={handleClick}>About</a>
            <a href="#skill" className='font-body m-3 p-3 hover:bg-gray-600 block rounded-lg text-white' onClick={handleClick}>Skills</a>
            <a href="#project" className='font-body m-3 p-3 hover:bg-gray-600 block rounded-lg text-white' onClick={handleClick}>Projects</a>
            <a href="#contact" className='font-body m-3 p-3 hover:bg-gray-600 block rounded-lg text-white' onClick={handleClick}>Contact ME 🚀</a>
            <div className='h-[1px] bg-gray-200 w-full my-5'></div>
            <button className='my-5 p-3 block lg:hidden bg-purple-600 text-white rounded-lg px-5 w-full hover:bg-purple-500 transition-all'>
              <a href="https://github.com/aamirali65" target='_blank'>Github Profile</a>
            </button>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Header;
