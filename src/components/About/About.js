import React from 'react';

import { Section } from './AboutStyles';
import { about } from '../../content/content';

import {Row, Col} from 'react-bootstrap'

const About = () => {
  return (
    <Section id='about'>
      <div data-aos='fade-up'>
        <div className='section-title'>
          <h2>About</h2>
          <p>{about.title}</p>
        </div>
        <Row>
          <Col lg={4} className='pt-4 pt-lg-0'>
            <img src='/images/hero-image.png' alt='about pic' />
          </Col>
          <Col lg={8} className='pt-8 pt-lg-0 content'>

          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default About;
