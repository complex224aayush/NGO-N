import React, { useState, useEffect } from 'react'
import "./Header.css";
import logo from '../../Images/logo.png'

const Header = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const scrolled = window.scrollY > 0;
      setIsScrolled(scrolled);
    };

    window.addEventListener('scroll', handleScroll);


    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div className={`topp ${isScrolled ? 'scrolled' : ''}`}>
   
      <div className='img'>
      <div className='z'>
        <a href='/'>
            <img className='l' src={logo}  alt='bal jyoti'/>
        </a>
</div>
      </div>
     
      <div className='nav'>
      <div className='h'>
        <p className='p1'>
        
        <a href='/'>Home</a>
        </p>
      </div>
      <div className='o'>
        <p className='p1'>
        
        <a href='/About'>About</a>
        </p>
      </div>
      <div className='s'>
        <p className='p2'>
        <a href='/Intervetion'>Intervetion</a>
        </p>
      </div>
      <div className='t'>
        <p className='p3'>
       <a href='/Know'>Know more</a>
        </p>
      </div>
      <div className='f'>
        <p className='p4'>
          <a href='/Region'>Contact us</a>
        </p>
      </div>
    </div>
    </div>
  )
}

export default Header
