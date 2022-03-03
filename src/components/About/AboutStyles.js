import styled from 'styled-components';

export const Section = styled.section`
  color: var(--white);

  h3 {
    font-weight: 700;
    font-size: 26px;
  }

  .content {
    ul {
      padding: 0;
    }
    li {
      margin-bottom: 20px;
      display: flex;
      align-items: center;
    }

    svg {
      font-size: 16px;
      margin-right: 5px;
      line-height: 0;
    }

    p {
      &:last-child {
        margin-bottom: 0;
      }
    }
  }
`;
