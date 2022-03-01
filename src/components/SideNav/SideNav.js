import { BiHome, BiCode } from 'react-icons/bi';
import { MdPersonOutline } from 'react-icons/md';

import { CustomContainer, CustomNav } from './SideNavStyles';

const SideNav = () => {
  return (
    <CustomContainer className='d-flex flex-column justify-content-center'>
      <CustomNav>
        <ul>
          <li>
            <a href='#home'>
              <BiHome />
              <span>Home</span>
            </a>
          </li>
          <li>
            <a href='#about'>
              <MdPersonOutline />
              <span>About</span>
            </a>
          </li>
          <li>
            <a href='#projects'>
              <BiCode />
              <span>Projects</span>
            </a>
          </li>
        </ul>
      </CustomNav>
    </CustomContainer>
  );
};

export default SideNav;
