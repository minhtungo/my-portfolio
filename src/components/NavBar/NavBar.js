import {
  CustomContainer,
  CustomHeader,
  CustomNav,
  BurgerNav,
  CloseWrapper,
  CustomClose,
  Logo,
} from './NavBarStyles';

import { useEffect } from 'react';

import NavLinks from './NavLinks';

import { MdMenu } from 'react-icons/md';

import './NavBar.css';

import { useState } from 'react';
import useScroll from '../../hooks/useScroll';

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

  const [burgerStatus, setBurgerStatus] = useState(false);
  return (
    <CustomHeader className={`fixed-top ${navClassList.join(' ')}`}>
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
