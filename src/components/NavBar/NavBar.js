import { Navbar, Nav, Container } from 'react-bootstrap';
import { sections } from '../../content/content';

import { CustomNavbar, CustomLink } from './NavBarStyles';
import './NavBar.css';

import { useState, useEffect } from 'react';
import useScroll from '../../hooks/useScroll';

import { MdMenu } from 'react-icons/md';

const NavBar = () => {
  const [navClassList, setNavClassList] = useState([]);
  const scroll = useScroll();

  useEffect(() => {
    const _classList = [];

    if (scroll.y > 150) {
      _classList.push('navbar-bg');
      if (scroll.y - scroll.lastY > 0) _classList.push('hidden');
    }

    setNavClassList(_classList);
  }, [scroll.y, scroll.lastY]);

  const handleToggle = () => {
    if(scroll.y === 0) {
       setNavClassList(['navbar-bg']);
    }
  };

  return (
    <CustomNavbar
      collapseOnSelect
      expand='lg'
      fixed='top'
      className={navClassList.join(' ')}
      variant='dark'
    >
      <Container>
        <Navbar.Brand href='#home'>Minh Tu Ngo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' onClick={handleToggle}>
          <MdMenu />
        </Navbar.Toggle>
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto align-items-center'>
            {sections.map((section) => (
              <CustomLink href={section.href}>{section.title}</CustomLink>
            ))}
            <CustomLink
              className='resume-button'
              href='/resume.pdf'
              target='_blank'
              rel='noopener noreferrer'
            >
              Resume
            </CustomLink>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavbar>
  );
};

export default NavBar;
