import { FaReact, FaBootstrap, FaNodeJs } from 'react-icons/fa';
import { SiTailwindcss, SiTypescript } from 'react-icons/si';
import { DiJavascript1 } from 'react-icons/di';

import { Row, Col } from 'react-bootstrap';

import { Section, Tech } from './AboutStyles';

const TechList = () => {
  return (
    <Row>
      <Col sm={6}>
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
      <Col sm={6}>
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
  );
};

export default TechList;
