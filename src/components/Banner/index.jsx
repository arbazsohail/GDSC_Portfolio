import React from 'react';
import './Banner.css';

import ProfileImage from './../../assets/profile.png';

function Banner() {
  return (
    <section className='banner' id='banner'>
      <div className='container'>
        <div className='banner-wrapper'>
          <div className='banner-img'>
            <img src={ProfileImage} alt='profile' />
          </div>
          <div className='banner-content'>
            <h6> Hello, I'm Muhammad Arbaz Sohail</h6>
            <h3>Flutter Developer</h3>
            <p>
              I am trying to be a professional Full Stack Developer & The goal
              is to design and build superior and innovative software by writing
              clean and flawless code as well as represent my country on
              international level
            </p>
            <a className='btn' href='#projects'>
              ABOUT ME
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}

export default Banner;
