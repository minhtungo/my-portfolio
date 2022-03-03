import {
  CustomContainer,
  CustomHeader,
  CustomNav,
  BurgerNav,
  CloseWrapper,
  CustomClose,
  Logo,
} from './NavBarStyles';
import NavLinks from './NavLinks';

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
          <NavLinks />
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
          <NavLinks />
        </BurgerNav>
      </CustomContainer>
    </CustomHeader>
  );
};

export default NavBar;
