import React from 'react';
import { Row, Col } from 'react-bootstrap';
import { projects } from '../../content/content';

import { BiLinkExternal } from 'react-icons/bi';
import { FaGithub } from 'react-icons/fa';

import {
  ProjectsList,
  ProjectBox,
  Content,
  Links,
  Link,
} from './ProjectsStyles';

const Projects = () => {
  return (
    <ProjectsList id='projects' data-aos='fade-up'>
      <div className='section-title'>
        <h2>Projects</h2>
        <div className='section-line'></div>
      </div>
      <Row>
        {projects.map((project) => (
          <Col lg={4} md={6} className='mb-3'>
            <ProjectBox>
              <img
                src={project.image}
                alt={project.title}
                className='img-fluid'
              />
              <Content className='content'>
                <h4>{project.title}</h4>
                <p>{project.description}</p>
                {project.tech.length > 0 && (
                  <ul className='d-flex justify-content-center'>
                    {project.tech.map((tech, i) => (
                      <li key={i}>{tech}</li>
                    ))}
                  </ul>
                )}
              </Content>
              <Links className='links'>
                <Link
                  href={project.liveURL}
                  target='_blank'
                  rel='noreferrer'
                  color='rgb(10, 102, 194)'
                >
                  <BiLinkExternal />
                </Link>
                <Link
                  href={project.github}
                  target='_blank'
                  rel='noreferrer'
                  color='grey'
                >
                  <FaGithub />
                </Link>
              </Links>
            </ProjectBox>
          </Col>
        ))}
      </Row>
    </ProjectsList>
  );
};

export default Projects;
