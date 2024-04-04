import About from './components/about/About';
import './App.css';
import NavBar from './components/navbar/Navbar';
import Projects from './components/projects/Projects';
import Contact from './components/contact/Contact';

function App() {
  return (
    <div className='app'>
      <NavBar />
      <About />
      <Projects />
      <Contact />
    </div>
  );
}

export default App;
