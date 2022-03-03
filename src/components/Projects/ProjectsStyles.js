import styled from 'styled-components';

export const ProjectsList = styled.section`
  color: var(--white);
`;

export const ProjectBox = styled.div`
  transition: 0.3s;
  position: relative;
  overflow: hidden;
  z-index: 1;

  &:before {
    content: '';
    background: rgba(44, 73, 100, 0.6);
    position: absolute;
    left: 30px;
    right: 30px;
    top: 30px;
    bottom: 30px;
    transition: all ease-in-out 0.3s;
    z-index: 2;
    opacity: 0;
  }

  &:hover {
    .content {
      opacity: 1;
      top: calc(50% - 48px);
    }

    .links {
      opacity: 1;
      bottom: calc(50% - 50px);
    }
  }

  &:hover:before {
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    opacity: 1;
  }
`;

export const Content = styled.div`
  opacity: 0;
  position: absolute;
  top: 10%;
  left: 0;
  right: 0;
  text-align: center;
  z-index: 3;
  transition: all ease-in-out 0.3s;

  h4 {
    font-size: 20px;
    color: var(--white);
    font-weight: 600;
  }

  p {
    color: var(--darker-white);
    font-size: 14px;
  }
`;

export const Links = styled(Content)`
  a {
    color: var(--white);
    margin: 0 2px;
    font-size: 28px;
    display: inline-block;
    transition: 0.3s;

    &:hover {
      color: var(--blue);
    }
  }
`;
