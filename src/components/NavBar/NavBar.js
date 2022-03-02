import {
  CustomContainer,
  CustomHeader,
  CustomNav,
  BurgerNav,
  CloseWrapper,
  CustomClose,
  Logo,
} from './NavBarStyles';
import { MdMenu } from 'react-icons/md';

import { useState } from 'react';

const NavBar = () => {
  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <CustomHeader className='fixed-top'>
      <CustomContainer className='d-flex align-items-center justify-content-between'>
        <Logo>
          <a href='#home'>Minh Tu Ngo</a>
        </Logo>
        <CustomNav>
          <ul>
            <li>
              <a href='#home'>Home</a>
            </li>
            <li>
              <a href='#about'>About</a>
            </li>
            <li>
              <a href='#projects'>Projects</a>
            </li>
            <li>
              <a href='#experience'>Experience</a>
            </li>
            <li>
              <a className='resume-button' href='#experience' target='_blank' rel='noopener noreferrer'>
                Resume
              </a>
            </li>
          </ul>
          <MdMenu
            className='mobile-nav-toggle'
            onClick={() => {
              setBurgerStatus(true);
            }}
          />
        </CustomNav>
        <BurgerNav show={burgerStatus}>
          <CloseWrapper>
            <CustomClose onClick={() => setBurgerStatus(false)} />
          </CloseWrapper>
          <li>
            <a href='#home'>Home</a>
          </li>
          <li>
            <a href='#about'>About</a>
          </li>
          <li>
            <a href='#projects'>Projects</a>
          </li>
          <li>
            <a href='#experience'>Experience</a>
          </li>
        </BurgerNav>
      </CustomContainer>
    </CustomHeader>
  );
};

export default NavBar;
