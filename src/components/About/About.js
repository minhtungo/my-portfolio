import React from 'react';

import { Section, Tech } from './AboutStyles';
import { about } from '../../content/content';


import { Row, Col } from 'react-bootstrap';
import TechList from './TechList';

const About = () => {
  return (
    <Section id='about'>
      <div data-aos='fade-up'>
        <div className='section-title'>
          <h2>About</h2>
          <div className='section-line'></div>
        </div>
        <Row>
          <Col lg={4} className='pt-8 pt-lg-0 text-center'>
            <img
              src='/images/avatar.png'
              className='img-fluid '
              alt='about pic'
            />
          </Col>
          <Col lg={8} className='pt-8 pt-lg-4 content'>
            <h3 className='mt-md-0 mt-3'>Front-end Developer.</h3>
            {about.description.map((description, i) => (
              <p key={i}>{description}</p>
            ))}

            <p>Here are some technologies I've been used:</p>
            <TechList />
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default About;
