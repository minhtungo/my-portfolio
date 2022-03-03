import React from 'react';

import { Section } from './AboutStyles';
import { about } from '../../content/content';
import {
  FaReact,
  FaBootstrap,
  FaNodeJs,
  FaHtml5,
  FaCss3Alt,
} from 'react-icons/fa';
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
                  <li>
                    <FaReact /> <span>React</span>
                  </li>
                  <li>
                    <DiJavascript1 /> <span>JavaScript (ES6+)</span>
                  </li>
                  <li>
                    <SiTypescript /> <span>TypeScript</span>
                  </li>
                </ul>
              </Col>
              <Col lg={6}>
                <ul>
                  <li>
                    <FaNodeJs /> <span>Node.js</span>
                  </li>
                  <li>
                    <FaBootstrap /> <span>Bootstrap</span>
                  </li>
                  <li>
                    <FaCss3Alt /> <span>CSS</span>
                  </li>
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
