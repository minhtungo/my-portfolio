const NavLinks = () => {
  return (
    <ul data-aos='fade-down'>
      <li>
        <a href='#home'>Home</a>
      </li>
      <li>
        <a href='#about'>About</a>
      </li>
      <li>
        <a href='#timeline'>Timeline</a>
      </li>
      <li>
        <a href='#projects'>Projects</a>
      </li>
      <li>
        <a href='#contact'>Contact</a>
      </li>
      <li>
        <a
          className='resume-button'
          href='#experience'
          target='_blank'
          rel='noopener noreferrer'
        >
          Resume
        </a>
      </li>
    </ul>
  );
};

export default NavLinks;
