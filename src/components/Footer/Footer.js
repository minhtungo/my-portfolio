import { Container } from 'react-bootstrap';
import { Section, SocialLinks, Link } from './FooterStyles';

import { FaGithub, FaLinkedinIn } from 'react-icons/fa';

const Footer = () => {
  return (
    <Section className='text-center'>
      <Container className='p-4 pb-0'>
        <SocialLinks className='mb-4'>
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
      </Container>
      <div className='pb-3'>2022 Minh Tu Ngo</div>
    </Section>
  );
};

export default Footer;
