import React from 'react';
import { services } from './mock-data';
import './ServiceExperience.css';

function ServicesExperience() {
  return (
    <section className='services-experience'>
      <div className='container'>
        <div className='services' id='services'>
          {services.map((service, i) => (
            <div
              key={i}
              className={`service ${service.active ? 'active' : ''}`}
            >
              <i className={`fas ${service.icon}`} />
              <h3>{service.title}</h3>
              <p>{service.desc}</p>
              <button className='btn'>Know More</button>
            </div>
          ))}
        </div>
        <div className='experiences' id='experiences'>
          <div className='experience'>
            <h3>02</h3>
            <p>Year Experience</p>
          </div>
          <div className='portfolios'>
            <div className='portfolio'>
              <h4>5+</h4>
              <p>Clients</p>
            </div>
            <div className='portfolio'>
              <h4>02</h4>
              <p>Years Experience</p>
            </div>
            <div className='portfolio'>
              <h4>20+</h4>
              <p>Completed Projects</p>
            </div>
            <div className='portfolio'>
              <h4>12</h4>
              <p>Achievements</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

export default ServicesExperience;
