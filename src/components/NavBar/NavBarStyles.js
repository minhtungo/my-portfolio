import styled from 'styled-components';
import { MdClose } from 'react-icons/md';

import { Container } from 'react-bootstrap';

export const CustomHeader = styled.header`
  transition: all 0.5s;
  z-index: 997;
  padding: 20px 0;
`;

export const CustomContainer = styled(Container)``;

export const Logo = styled.h1`
  font-size: 28px;
  margin: 0;
  padding: 0;
  font-weight: 500;
  letter-spacing: 1px;
`;

export const CustomNav = styled.nav`
  padding: 0;

  ul {
    margin: 0;
    padding: 0;
    display: flex;
    align-items: center;
  }

  li {
    position: relative;
    white-space: nowrap;
    padding: 10px 0 10px 30px;
  }

  a {
    display: flex;
    align-items: center;
    justify-content: space-between;
    font-size: 16px;
    font-weight: 600;
    padding: 0;
    white-space: nowrap;
    transition: 0.3s;
    letter-spacing: 0.4px;
    position: relative;

    &:before {
      content: '';
      position: absolute;
      height: 3px;
      bottom: -6px;
      left: 0;
      width: 0;
      background-color: rgb(56, 189, 248);
      visibility: hidden;
      transition: all 0.3s ease-in-out 0s;
    }

    &:hover:before {
      visibility: visible;
      width: 80%;
    }
  }

  svg {
    color: var(--white);
  }

  .active {
    visibility: visible;
    width: 80%;
  }

  .resume-button {
    padding: 6px 8px;
    border-radius: 4px;
    border: 1px solid var(--blue);
    color: var(--blue) !important;
    margin-left: 10px;

    &:hover {
      background-color: rgba(5, 99, 187, 0.15);
    }

    &:hover:before {
      visibility: hidden;
    }
  }

  ${'' /* Mobile navigation */}
  .mobile-nav-toggle {
    font-size: 28px;
    cursor: pointer;
    display: none;
    line-height: 0;
    transition: 0.5s;
  }

  @media (max-width: 991px) {
    .mobile-nav-toggle {
      display: block;
    }

    ul {
      display: none;
    }
  }
`;

export const BurgerNav = styled.div`
  position: fixed;
  top: 0;
  bottom: 0;
  right: 0;
  background-color: rgba(38, 38, 38, 0.9);
  width: 300px;
  z-index: 10;
  list-style: none;
  padding: 20px;
  display: flex;
  flex-direction: column;
  text-align: start;
  transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
  transition: transform 0.5s;
  text-align: center;
  li {
    padding: 15px 0;

    a {
      font-weight: 600;
      color: #1e1e1e;
    }
  }

  svg {
    color: var(--white);
  }
`;

export const CloseWrapper = styled.div`
  display: flex;
  justify-content: flex-end;
`;

export const CustomClose = styled(MdClose)`
  cursor: pointer;
`;
