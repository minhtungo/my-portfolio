import { sections } from '../content/content';
import { Navbar, Nav, Container } from 'react-bootstrap';

import styled from 'styled-components';

const CustomNavBar = styled(Navbar)`
  background: black;

  a {
    color: white !important;
  }
`;



const NavBar = () => {
  return (
    <CustomNavBar collapseOnSelect expand='lg'>
      <Container>
        <Navbar.Brand href='#home'>Minh Tu Ngo</Navbar.Brand>
        <Navbar.Toggle aria-controls='responsive-navbar-nav' />
        <Navbar.Collapse id='responsive-navbar-nav'>
          <Nav className='ms-auto'>
            <Nav.Link href='#about'>About</Nav.Link>
            <Nav.Link href='#projects'>Projects</Nav.Link>
            <Nav.Link href='#projects'>Experience</Nav.Link>
          </Nav>
        </Navbar.Collapse>
      </Container>
    </CustomNavBar>
  );
};

export default NavBar;
