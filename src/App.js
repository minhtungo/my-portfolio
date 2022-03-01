import './App.css';

import SideNav from './components/SideNav/SideNav';
import NavBar from './components/NavBar';
import Hero from './components/Hero/Hero';
import Projects from './components/Projects';
import Aos from 'aos';

function App() {
  Aos.init({ duration: 1300, delay: 100 });
  return (
    <div className='App'>
      <SideNav />
      <NavBar />
      <Hero />
      <Projects />
    </div>
  );
}

export default App;
