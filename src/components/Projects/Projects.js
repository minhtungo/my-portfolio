import React from 'react';
import { Row } from 'react-bootstrap';

import { projects } from '../../content/content';
import { ProjectsList, CustomCol } from './ProjectsStyles';

const Projects = () => {
  return (
    <ProjectsList id='projects' data-aos='fade-up'>
      <div className='section-title'>
        <h2>Projects</h2>
      </div>
      <Row className='text-center'>
        {projects.map((project, i) => (
          <CustomCol key={i} lg={4} md={6} sm={12} className='mb-4'>
            <div className='rounded'>
              <img
                src={project.image}
                className='img-fluid'
                alt={project.title}
              />
            </div>
            <div className='card-body pb-0'>
              <h4 className='font-weight-bold my-3'>{project.title}</h4>
              <p>{project.description}</p>
              {project.tech.length > 0 && (
                <ul className='project-tech-list'>
                  {project.tech.map((tech, i) => (
                    <li key={i}>{tech}</li>
                  ))}
                </ul>
              )}
              <a
                href={project.github}
                target='_blank'
                rel='noreferrer'
                className='btn btn-success btn-rounded btn-md'
              >
                <i className='fas fa-clone left'></i> View project
              </a>
            </div>
          </CustomCol>
        ))}
      </Row>
    </ProjectsList>
  );
};

export default Projects;
