import React from 'react';
import { Row, Col } from 'react-bootstrap';

import { projects } from '../../content/content';
import {
  ProjectsList,
  ProjectBox,
  ImageBox,
  Content,
  Hr,
} from './ProjectsStyles';

const Projects = () => {
  return (
    <ProjectsList id='projects'>
      <div className='section-title'>
        <h2>Projects</h2>
        <div className='section-line'></div>
      </div>
      <Row className='text-center'>
        {projects.map((project, i) => (
          <Col md={6} lg={4}>
            <ProjectBox>
              <a href='/'>
                <ImageBox>
                  <img
                    src={project.image}
                    className='img-fluid'
                    alt={project.title}
                  />
                </ImageBox>
              </a>
              <Content className='card-body pb-0'>
                <h3 className='font-weight-bold my-2'>{project.title}</h3>
                <Hr />
                <p className='description'>{project.description}</p>
                {project.tech.length > 0 && (
                  <ul className='d-flex justify-content-center'>
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
              </Content>
            </ProjectBox>
          </Col>
        ))}
      </Row>
    </ProjectsList>
  );
};

export default Projects;

// <ProjectsList id='projects' data-aos='fade-up'>

//   <Row className='text-center'>
//     {projects.map((project, i) => (
//       <CustomCol key={i} lg={4} md={6} sm={12} className='mb-4'>
//         <div className='rounded'>

//         </div>
// <div className='card-body pb-0'>
//   <h4 className='font-weight-bold my-3'>{project.title}</h4>
//   <p>{project.description}</p>
//   {project.tech.length > 0 && (
//     <ul className='project-tech-list'>
//       {project.tech.map((tech, i) => (
//         <li key={i}>{tech}</li>
//       ))}
//     </ul>
//   )}
//   <a
//     href={project.github}
//     target='_blank'
//     rel='noreferrer'
//     className='btn btn-success btn-rounded btn-md'
//   >
//     <i className='fas fa-clone left'></i> View project
//   </a>
// </div>
//       </CustomCol>
//     ))}
//   </Row>
// </ProjectsList>
