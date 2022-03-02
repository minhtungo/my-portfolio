import SideNav from './components/SideNav/SideNav';
import NavBar from './components/NavBar/NavBar';
import Hero from './components/Hero/Hero';
import About from './components/About/About';
import Projects from './components/Projects/Projects';

import Aos from 'aos';
import 'aos/dist/aos.css';
import { Container } from 'react-bootstrap';

function App() {
  Aos.init({ duration: 1300, delay: 100 });
  return (
    <div className='App'>
      <SideNav />

      <NavBar />
      <Container>
        <Hero />
        <About />
        <Projects />
      </Container>
    </div>
  );
}

export default App;
