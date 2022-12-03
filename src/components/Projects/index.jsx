import React from 'react';
import './Projects.css';
import { projects } from './mock-data';

function Projects() {
  return (
    <section className='projects' id='projects'>
      <div className='container'>
        <div className='title'>
          <h3>Featured Projects</h3>
          <a
            href='https://github.com/hafizjavaid'
            target='_blank'
            className='btn'
            rel='noreferrer'
          >
            View All
          </a>
        </div>
        <div className='projects-wrapper'>
          {projects.map((project, i) => (
            <div className='project' key={i}>
              <div className='img-container'>
                <img src={project.img} alt={project.title} />
              </div>
              <div className='description'>
                <h4>{project.title}</h4>
                <div className='links'>
                  <a href={project.gLink} target='_blank' rel='noreferrer'>
                    <i className='fab fa-github'></i>
                  </a>
                  <a href={project.lLink} target='_blank' rel='noreferrer'>
                    <i className='fa fa-globe'></i>
                  </a>
                </div>
              </div>
              <p>
                Lorem ipsum dolor sit amet consectetur adipisicing elit. Laborum
                ea nobis aut deserunt. Reprehenderit numquam harum facilis
                beatae praesentium pariatur eligendi non. Explicabo, cupiditate
                odit vero quo iste numquam obcaecati.
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}

export default Projects;
