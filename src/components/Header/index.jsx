import React, { useState, useEffect } from 'react';
import './Header.css';
import { menu } from './mock-data';

function Header() {
  const [stickyClass, setStickyClass] = useState('');
  const [active, setActive] = useState(false);

  useEffect(() => {
    window.addEventListener('scroll', stickNavbar);

    return () => {
      window.removeEventListener('scroll', stickNavbar);
    };
  }, []);

  const stickNavbar = () => {
    if (window !== undefined) {
      let windowHeight = window.scrollY;
      windowHeight > 100 ? setStickyClass('sticky') : setStickyClass('');
    }
  };

  return (
    <header className={`${stickyClass}`}>
      <div className='header-inner'>
        <span className='logo'>Muhammad Arbaz Sohail.</span>
        <div className='links'>
          {menu.map((item) => (
            <a className='link' href={item.ref}>
              {item.label}
            </a>
          ))}
        </div>
        <span className='menu' onClick={() => setActive(!active)}>
          <i className='fas fa-bars'></i>
        </span>
      </div>
      <div className={`mobile-links ${active ? 'active' : ''}`}>
        {menu.map((item) => (
          <a
            className='link'
            onClick={() => setActive(!active)}
            href={item.ref}
          >
            {item.label}
          </a>
        ))}
      </div>
    </header>
  );
}

export default Header;
