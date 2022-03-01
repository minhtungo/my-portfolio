import styled from 'styled-components';

export const Section = styled.section`
  width: 100%;
  height: 100vh;
  position: relative;

  h1 {
    margin: 0;
    font-size: 64px;
    font-weight: 700;
    line-height: 56px;
    color: #45505b;
  }

  p {
    color: #45505b;
    margin: 15px 0 0 0;
    font-size: 26px;
    font-family: 'Poppins', sans-serif;
  }

  @media (min-width: 992px) {
    padding-left: 160px;
  }

  @media (max-width: 992px) {
    text-align: center;

    h1 {
      font-size: 32px;
      line-height: 36px;
    }

    p {
      margin-top: 10px;
      font-size: 20px;
      line-height: 24px;
    }
  }
`;

export const SocialLinks = styled.div`
  margin-top: 30px;

  a {
    font-size: 24px;
    display: inline-block;
    color: #45505b;
    line-height: 1;
    margin-right: 20px;
    transition: 0.3s;

    &:hover {
      color: #0563bb;
    }
  }
`;
