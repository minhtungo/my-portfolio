import TypeAnimation from 'react-type-animation';

import { Section, SocialLinks, Link } from './HeroStyles';
import { FaGithub, FaLinkedinIn } from 'react-icons/fa';
import DownArrow from './DownArrow';

const Hero = () => {
  return (
    <Section id='home' className='d-flex flex-column justify-content-center'>
      <div data-aos='zoom-in' className='text-lg-start'>
        <p className='greeting'>Hi, my name is</p>
        <h1>Minh Tu Ngo.</h1>
        <p>
          &lt;p&gt;
          <TypeAnimation
            cursor={true}
            sequence={[
              'I am a front-end developer.',
              1000,
              'I love building things for the web.',
              1000,
              '',
            ]}
            wrapper='b'
            repeat={Infinity}
          />
          &lt;/p&gt;
        </p>
        <SocialLinks>
          <Link href='https://github.com/minhtungo' color='grey'>
            <FaGithub />
          </Link>
          <Link
            href='https://www.linkedin.com/in/minhtu-ngo99/'
            color='rgb(10, 102, 194)'
          >
            <FaLinkedinIn />
          </Link>
        </SocialLinks>
        <a className='btn' href='#contact'>
          Say Hello
        </a>
      </div>
      <DownArrow />
    </Section>
  );
};

export default Hero;
