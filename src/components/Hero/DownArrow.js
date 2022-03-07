import { RiArrowDownSLine } from 'react-icons/ri';
import styled from 'styled-components';

const ArrowContainer = styled.div`
  text-align: center;
`;

const CustomArrow = styled(RiArrowDownSLine)`
  position: absolute;
  bottom: 3%;
  margin-top: 20px;
  height: 24px;
  width: 24px;
  fill: white;
  overflow-x: hidden;

  animation: animateDown infinite 1.5s;
`;

const DownArrow = () => {
  return (
    <ArrowContainer>
      <a href='#about'>
        <CustomArrow />
      </a>
    </ArrowContainer>
  );
};

export default DownArrow;
