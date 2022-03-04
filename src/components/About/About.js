import React from 'react';

import { Section, Tech } from './AboutStyles';
import { about } from '../../content/content';
import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';
import { SiTypescript } from 'react-icons/si';

import { Row, Col } from 'react-bootstrap';

const About = () => {
  return (
    <Section id='about'>
      <div data-aos='fade-up'>
        <div className='section-title'>
          <h2>About</h2>
          <div className='section-line'></div>
        </div>
        <Row>
          <Col lg={4} className='pt-4 pt-lg-0'>
            <img
              src='/images/hero-image.png'
              className='img-fluid'
              alt='about pic'
            />
          </Col>
          <Col lg={8} className='pt-8 pt-lg-0 content'>
            <h3>Front-end Developer.</h3>
            <p>{about.description}</p>
            <p>Here are some technologies I've been used:</p>
            <Row>
              <Col lg={6}>
                <ul>
                  <Tech color='rgb(97, 218, 251)'>
                    <FaReact /> <span>React</span>
                  </Tech>
                  <Tech color='rgb(252, 220, 0)'>
                    <DiJavascript1 /> <span>JavaScript (ES6+)</span>
                  </Tech>
                  <Tech color='rgb(49, 120, 198)'>
                    <SiTypescript /> <span>TypeScript</span>
                  </Tech>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <Tech color='rgb(65, 126, 56)'>
                    <FaNodeJs /> <span>Node.js</span>
                  </Tech>
                  <Tech color='rgb(121, 82, 179)'>
                    <FaBootstrap /> <span>Bootstrap</span>
                  </Tech>
                  <Tech color='rgb(34, 211, 238)'>
                    <SiTailwindcss /> <span>Tailwind</span>
                  </Tech>
                </ul>
              </Col>
            </Row>
          </Col>
        </Row>
      </div>
    </Section>
  );
};

export default About;
