import styled from 'styled-components';

import { Container } from 'react-bootstrap';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;
  background: url('/images/hero-image.png') center right no-repeat;
  background-size: 400px 400px;

  h1 {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: rgb(230, 230, 230);
  }

  p {
    color: rgb(230, 230, 230);
    margin: 15px 0 0 0;
    font-size: 22px;
    font-family: 'Poppins', sans-serif;
  }

  .greeting {
    margin-top: 0;
    margin-bottom: 30px;
    font-size: 16px;
  }

  @media (min-width: 992px) {
    ${'' /* padding-left: 160px; */}
  }

  @media (max-width: 992px) {
    text-align: center;

    h1 {
      font-size: 32px;
      line-height: 36px;
    }

    p {
      margin-top: 10px;
      font-size: 18px;
      line-height: 24px;
    }
  }
`;

export const CustomContainer = styled(Container)``;

export const SocialLinks = styled.div`
  margin-top: 30px;

  a {
    font-size: 24px;
    display: inline-block;
    color: var(--light-dark);
    line-height: 1;
    margin-right: 20px;
    transition: 0.3s;

    &:hover {
      color: var(--blue);
    }
  }
`;
