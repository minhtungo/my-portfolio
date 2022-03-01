import { Container } from 'react-bootstrap';
import TypeAnimation from 'react-type-animation';

import { Section, SocialLinks } from './HeroStyles';
import { FaFacebookF, FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Hero = () => {
  return (
    <Section id='hero' className='d-flex flex-column justify-content-center'>
      <Container data-aos='zoom-in' className="text-start">
        <h1>Minh Tu Ngo</h1>
        <TypeAnimation
          cursor={true}
          sequence={['I am a front-end developer.', 1000, '']}
          wrapper='p'
          repeat={Infinity}
        />
        <SocialLinks>
          <a href='/'>
            <FaFacebookF />
          </a>
          <a href='/'>
            <FaGithub />
          </a>
          <a href='/'>
            <FaLinkedinIn />
          </a>
        </SocialLinks>
      </Container>
    </Section>
  );
};

export default Hero;
