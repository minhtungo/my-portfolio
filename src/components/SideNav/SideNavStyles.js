import styled from 'styled-components';

export const CustomContainer = styled.section`
  position: fixed;
  top: 0;
  left: 0;
  bottom: 0;
  z-index: 100;
  transition: all 0.5s;
  padding: 15px;
  overflow-y: auto;

  @media (max-width: 992px) {
    transform: translateX(-100%);
  }
`;

export const CustomNav = styled.nav`
  padding: 0;
  display: block;
  margin: 0;

  ul {
    padding: 0;
  }

  li {
    position: relative;
    white-space: nowrap;
  }

  a {
    display: flex;
    align-items: center;
    color: #45505b;
    padding: 10px 18px;
    margin-bottom: 8px;
    font-size: 15px;
    border-radius: 50px;
    background: #f2f3f5;
    height: 56px;
    width: 100%;
    overflow: hidden;
    transition: 0.4s;

    svg {
      font-size: 20px;
    }

    span {
      padding: 0 5px 0 7px;
      color: #45505b;
    }

    &:hover {
      color: white;
      background: #0563bb;
      width: 100%;

      span {
        color: white;
        display: block;
      }
    }
  }

  @media (min-width: 992px) {
    a {
      width: 56px;

      span {
        display: none;
        color: #fff;
      }
    }
  }
`;
