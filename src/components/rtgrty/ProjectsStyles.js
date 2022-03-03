import styled from 'styled-components';

export const ProjectsList = styled.section`
  color: var(--white);

  img {
    width: 100%;
    height: 100%;
    object-fit: cover;
  }
`;

export const ProjectBox = styled.div`
  margin-bottom: 3rem;
  -webkit-backface-visibility: hidden;
  backface-visibility: hidden;
  background-color: var(--opacity-dark);

  &:hover img {
    transform: scale(1.125);
  }
`;

export const ImageBox = styled.div`
  display: block;
  overflow: hidden;

  img {
    transition: all 0.6s;
  }
`;

export const Content = styled.div`
  .description {
    color: var(--darker-white);
  }

  li {
    margin-left: 8px;
    padding: 2px 6px;
    border-radius: 4px;
    border: 1px solid var(--blue);
    color: var(--blue);

    &:first-child {
      margin-left: 0;
    }
  }
`;

export const Hr = styled.hr`
  width: 50px;
  height: 5px;
  margin: 15px auto;
  border: 0;
  background: var(--blue-gradient);
`;
