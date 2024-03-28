import React from 'react';
//images
import Logo from '../assets/logo.svg';
const Header = () => {
  return (
    <header className='bg-pink-300 py-8'>
      <div className='container mx-auto'>
        <div className='flex justify-between items-center'>
          {/* logo */}
          <a href="/your-page" className="flex items-center"> 
            <img src={Logo} alt='Logo'/> 
             
          </a>
          {/* button */}
          <button className='btn btn-sm'>Work with me</button>
        </div>
      </div>
    </header>
  );
};

export default Header;
